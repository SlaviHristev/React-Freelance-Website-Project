import axios from "axios";



const upload = async(file) =>{
    const data = new FormData();
    data.append("file",file);
    data.append('upload_preset', "Freelance4U");

    try {
        const res = await axios.post(
            process.env.UPLOAD_LINK,
            data
        );

        const {url} = res.data;
        return url;
    } catch (error) {
        console.log(error);
    }
}

export default upload;