import { createClient } from "@supabase/supabase-js";

//TODO:Replace with the nextjs way of importing before deploy
// export const supabase = createClient(
//   import.meta.env.VITE_SUPA_REST_URL,
//   import.meta.env.VITE_SUPA_ANON_KEY
// );

//TODO:Replace with env var call before deploy
export const supabase = createClient(
  "https://uqehjvabrmmtkziwgkuw.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZWhqdmFicm1tdGt6aXdna3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDUzODEsImV4cCI6MjAxNzI4MTM4MX0.2UOibWpxRlxHy6hKyH9bZz3s9G2sfaKh8bUkmE9e55E"
);

//Adds data to a table given it's name
export const addToDB = async (tableName, dbData) => {
  const { data, error } = await supabase
    .from(tableName)
    .insert([dbData])
    .select();

  if (error) throw error;
};

//Simply reads all the data from a table given it's name
export const readAllDB = async (tableName) => {
  const { data, error } = await supabase.from(tableName).select("*");
  if (error) {
    throw error;
  }
  return data;
};

//Deletes a row based on the value of one of its columns
export const deleteDBData = async (tableName, columnName, columnValue) => {
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq(columnName, columnValue);

  if (error) {
    throw error;
  }

  console.log("Deletion successful");
};

// Returns related data from one table (fromTable) based on a specified value (fromValueName) in the "name" column.
// It selects all columns from the specified table (selectedTable) and additional data specified in selectedData,
// where the value in the "name" column matches the provided fromValueName.
// If successful, it returns the retrieved data; otherwise, it throws an error.
export const readRelatedData = async (
  fromTable,
  fromValueName,
  selectedTable,
  selectedData
) => {
  const { data, error } = await supabase
    .from(fromTable)
    .select(`*, ${selectedTable} (${selectedData})`)
    .eq("name", fromValueName);

  if (error) throw error;
  console.log(data);
  return data;
};

//Fetches the id of one value given the tableName where it is located, the column we wan't to identify it for
//and which value that column should have. ex: "GROUPS", "name", "general" will fetch the id of the general group
export const fetchID = async (tableName, column, columnValue) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select("id")
      .eq(column, columnValue);

    if (error) {
      console.error("Error fetching ID:", error);
      return null;
    }

    //Since we don't know if the users are going to register more than one, there might be duplicated people in the database with
    //different data, so this will return an array of id's just in case for example we ask for the id of a subscriber with the email "email@email.com" and there are multiple
    return data;
  } catch (error) {
    console.error("Error fetching ID:", error.message);
    return null;
  }
};

//Creates a group given a group object { id:uuid() , name:string }
export const createGroup = async (group) => {
  addToDB("GROUPS", group);
};

//Adds a subscriber to a group given the subscriber email and the group name
export const addSubscriberToGroup = async (subscriberID, groupName) => {
  try {
    //We fetch the id from the specified group
    const groups = await fetchID("GROUPS", "name", groupName);

    //add the group_id and subscriber_id to the GROUPS_SUBSCRIBERS table to make them related

    addToDB("GROUPS_SUBSCRIBERS", {
      group_id: groups[0].id, // Assuming groups are unique
      subscriber_id: subscriberID,
    });
  } catch (error) {
    console.error("Error adding subscriber to group:", error);
    // Handle error or throw it further if necessary
  }
};

//Adds a subscriber to our database, also adds it to the general subscriber group by default
export const addSubscriber = async (subscriber) => {
  //We add the subscriber to the SUBSCRIBERS table
  addToDB("SUBSCRIBERS", subscriber);

  //We add the subscriber the general group by default
  addSubscriberToGroup(subscriber.id, "general");
};

//Fetch campaigns by giving it the type (email | sms)
export const fetchCampaigns = async (type) => {
  const { data, error } = await supabase
    .from("CAMPAIGNS")
    .select("*")
    .eq("type", type);
  if (error) {
    console.error(error);
    return null;
  }
  // console.log(data)
  return data;
};

export const fetchCampaignDetail = async (campaignID) => {
  const { data, error } = await supabase
    .from("CAMPAIGNS")
    .select("*")
    .eq("id", campaignID);
  if (error) {
    console.error(error);
    return null;
  }
  // console.log(data)
  return data;
};

//Creates a campaign by giving it a campaign object and a groupID
export const createCampaign = async (campaign, groupID) => {
  addToDB("CAMPAIGNS", campaign).then(() => {
    addToDB("GROUPS_CAMPAIGNS", {
      group_id: groupID,
      campaign_id: campaign.id,
    });
  });
};

//Updates the status of a campaign
export const updateCampaignStatus = async (campaignID, status) => {
  const { error } = await supabase
    .from("CAMPAIGNS")
    .update({ status: status })
    .eq("id", campaignID)
    .select();

  if (error) throw error;
};

//Creates the relation between an email campaign and an email
export const relateEmailToCampaign = async (campaignID, emailID) => {
  console.log(campaignID, emailID);
  addToDB("CAMPAIGNS_EMAILS", { campaign_id: campaignID, email_id: emailID });
};

//Creates the relation between an sms campaign and an sms
export const relateSMSToCampaign = async (campaignID, smsID) => {
  addToDB("CAMPAIGNS_SMS", { campaign_id: campaignID, sms_id: smsID });
};

//Creates an email on the database
export const createEmail = async (campaignID, email) => {
  await addToDB("EMAILS", email).then(() => {
    relateEmailToCampaign(campaignID, email.id);
  });
};

//Creates an sms on the database
export const createSMS = async (campaignID, sms) => {
  await addToDB("SMS", sms).then(() => {
    relateSMSToCampaign(campaignID, sms.id);
  });
};

export const readRelatedEmail = async (campaignID) => {
  const { data, error } = await supabase
    .from("CAMPAIGNS")
    .select(`*, EMAILS (id, name, content, design)`)
    .eq("id", campaignID);

  if (error) throw error;
  return data;
};

export const readRelatedSMS = async (campaignID) => {
  const { data, error } = await supabase
    .from("CAMPAIGNS")
    .select(`*, SMS (id, content)`)
    .eq("id", campaignID);

  if (error) throw error;
  return data;
};

export const readRelatedGroups = async (campaignID) => {
  const { data, error } = await supabase
    .from("CAMPAIGNS")
    .select(`*, GROUPS (id, name)`)
    .eq("id", campaignID);

  if (error) throw error;
  return data;
};

export const readRelatedSubscribers = async (groupID) => {
  const { data, error } = await supabase
    .from("GROUPS")
    .select(`*, SUBSCRIBERS (id, first_name, last_name, email, phone_number)`)
    .eq("id", groupID);

  if (error) throw error;
  return data;
};

export const addSubToGroup = async (groupID, subID) => {
  console.log(groupID, subID);
  addToDB("GROUPS_SUBSCRIBERS", { group_id: groupID, subscriber_id: subID });
};

export const deleteSubFromGroup = async (groupID, subId) => {
  const { error } = await supabase
    .from("GROUPS_SUBSCRIBERS")
    .delete()
    .eq("group_id", groupID)
    .eq("subscriber_id", subId);

  if (error) {
    throw error;
  }

  console.log("Deletion successful");
};
