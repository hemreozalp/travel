import axios from "axios";

const searchTravelBusinesses = async (location) => {
  try {
    const response = await axios.get(
      "https://api.yelp.com/v3/businesses/search",
      {
        headers: {
          Authorization: "Bearer YOUR_YELP_API_KEY",
        },
        params: {
          term: "Travel",
          location: location,
        },
      }
    );

    return response.data.businesses;
  } catch (error) {
    console.error("Error searching travel businesses:", error);
    throw error; // Hata durumunda kontrolü dışa aktarabilirsiniz
  }
};

export { searchTravelBusinesses };
