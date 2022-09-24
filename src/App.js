import {Posts} from "./components";
import {Users} from "./components/users/Users";
import {useState} from "react";

import {postService} from "./services";

function App() {
   const [posts, setPosts] = useState([]);

   const getUseId =(userId)=>{
        postService.getPosts(userId).then(({data})=> setPosts(data) )
   }
  return (
    <div>
      <Users  getUseId = {getUseId}/>
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
