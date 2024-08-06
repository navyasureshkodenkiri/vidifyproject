import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/Api";
import VideoCards from "../../components/VideoCards";

export default function CategoryVideoScreen() {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryVideos() {
      setLoading(true);
      try {
        const response = await axios.post(API.categoryVideos, { category });
        setVideos(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryVideos();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{category}</h1>
      <div>
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <VideoCards key={index} video={video} />
          ))
        ) : (
          <p>No videos found for this category.</p>
        )}
      </div>
    </div>
  );
}
