import axios from "axios";
import { NODE_URL } from "../config/globalconfig";

const getUser = async (payload)=>{
    var options = {
		method: 'get',
		baseURL:NODE_URL,
		url:'/user',
		params:payload,
		headers: {}
	  };
	return await axios(options)
}

export default {getUser}