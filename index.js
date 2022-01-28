import axios from "axios";
import fetch from "axios";


async function getUser(user_id){
    const {data: users} = await( axios("https://jsonplaceholder.typicode.com/users/" + user_id));
    const {data: posts} = await( axios("https://jsonplaceholder.typicode.com/posts/" + user_id));
    console.log(users," posts:[",posts,"]");
    // console.log();
}


getUser(4);

export { getUser };

