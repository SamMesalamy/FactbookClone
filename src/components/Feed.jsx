import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post 
          src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/grapes-and-silver-goblet-tom-mc-nemar.jpg" title="Ahmed Ali" desc="yeah this is love"/>
          <Post 
          src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/grapes-with-apples-tom-mc-nemar.jpg"
          title="Mohamed" desc="yeah this is love"/>
          <Post title="Mohamed Sayed" desc="yeah this is love"
          src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large/purple-ivan-vukelic.jpg"
          />
          <Post  title="Sayed" desc="yeah this is love"
          src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/moonlight-reflection-chad-dutson.jpg"
          />
          <Post title="Youssef" desc="yeah this is love"
          src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/pomegranate-still-life-tom-mc-nemar.jpg"
          />
          <Post title="Ramy Gamal" desc="yeah this is love"
           src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/purple-fire-scott-norris.jpg"
          />
        </>
      )}
    </Box>
  );
};

export default Feed;
