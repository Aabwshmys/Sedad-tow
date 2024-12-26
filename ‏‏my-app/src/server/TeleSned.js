import axios from 'axios';

export const TeleSned = () => {
    const Send = async (des) => {
        const token = process.env.SLACK_BOT_TOKEN;
        const url = 'https://slack.com/api/chat.postMessage';

        const payload = {
            channel: '#hackfre', // تحديد القناة مباشرة
            text: des // تعيين النص من البيانات المدخلة
        };

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
        });
    }

    return {
        Send,
    }
}

export default TeleSned;
