import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
        key:"b0b443db461a46b09f32dcff3720a834"
    }
})