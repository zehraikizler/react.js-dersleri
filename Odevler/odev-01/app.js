
import axios from "axios"

async function getData(user_id) {
    const user = await (
        await axios("https://jsonplaceholder.typicode.com/users/" + user_id).then())

    const post = await (
        await axios("https://jsonplaceholder.typicode.com/posts/" + user_id).then())
    
    const selectedUser = user.data;
    const selectedPost = post.data;
    
    const userProfile = [];
    userProfile.push(selectedUser);
    userProfile.push(selectedPost);
    console.log(userProfile);
};

export default getData;