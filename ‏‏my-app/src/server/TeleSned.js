import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export const TeleSned = () => {
    const Send = async (des) => {
        const token = process.env.SLACK_BOT_TOKEN;
        const url = 'https://slack.com/api/chat.postMessage';

        const payload = {
            channel: '#hackfre', // تحديد القناة مباشرة
            text: des // تعيين النص من البيانات المدخلة
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            console.log('Slack response:', data); // طباعة استجابة Slack لتحليل الأخطاء

            if (!data.ok) {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Error sending message to Slack:', error);
        }
    }

    return {
        Send,
    }
}

export default TeleSned;
