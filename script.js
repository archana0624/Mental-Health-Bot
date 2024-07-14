const faqData = [
    {
        keyword: "mental illness",
        answer: "Mental illnesses are health conditions that affect a person's thinking, feeling, mood, and behavior. They can be challenging, but with support and treatment, many people manage their symptoms and lead fulfilling lives."
    },
    {
        keyword: "support",
        answer: "If you're seeking support, it's important to reach out to friends, family, or a mental health professional. You don't have to go through this alone."
    },
    {
        keyword: "stress",
        answer: "Stress can be overwhelming, but there are many ways to manage it, such as practicing mindfulness, engaging in physical activity, or talking to someone you trust."
    },
    {
        keyword: "anxiety",
        answer: "Anxiety can feel debilitating, but there are effective treatments available. Techniques like deep breathing, mindfulness, and therapy can help manage symptoms."
    },
    {
        keyword: "depression",
        answer: "Depression is a serious condition, but it's treatable. Talking to a mental health professional and exploring treatment options like therapy and medication can make a big difference."
    },
    {
        keyword: "therapy",
        answer: "Therapy provides a safe space to explore your feelings and work through challenges. There are many types of therapy, so you can find one that works best for you."
    },
    {
        keyword: "medication",
        answer: "Medication can be an important part of treatment for many mental health conditions. It's important to discuss options with a healthcare provider to find the best approach for you."
    },
    {
        keyword: "self-care",
        answer: "Self-care is essential for mental health. Activities like exercise, hobbies, and spending time with loved ones can help maintain a positive mindset."
    },
    {
        keyword: "panic attack",
        answer: "During a panic attack, focus on your breathing and try to ground yourself. Techniques like deep breathing and mindfulness can be helpful. Reach out for support if you need it."
    },
    {
        keyword: "suicide",
        answer: "If you're feeling suicidal, please seek help immediately. Reach out to a trusted friend, family member, or mental health professional. You don't have to face this alone."
    },
    {
        keyword: "isolation",
        answer: "Feeling isolated can be difficult. Try to connect with others, even in small ways. Reach out to friends or join a support group to feel more connected."
    },
    {
        keyword: "self-esteem",
        answer: "Building self-esteem takes time. Focus on your strengths, set achievable goals, and surround yourself with supportive people. Positive self-talk can also be very helpful."
    },
    {
        keyword: "sleep",
        answer: "Good sleep is crucial for mental health. Try to establish a regular sleep schedule, create a restful environment, and avoid screens before bedtime."
    },
    {
        keyword: "exercise",
        answer: "Regular exercise can significantly improve mental health. Find activities you enjoy, and try to incorporate them into your routine."
    },
    {
        keyword: "mindfulness",
        answer: "Mindfulness involves focusing on the present moment. Practices like meditation, deep breathing, and mindful walking can reduce stress and improve well-being."
    },
    {
        keyword: "relationships",
        answer: "Healthy relationships are vital for mental health. Communicate openly, set boundaries, and spend quality time with those who support you."
    },
    {
        keyword: "nutrition",
        answer: "A balanced diet can affect your mental health. Eating nutritious foods, staying hydrated, and avoiding excessive caffeine and sugar can help maintain a stable mood."
    },
    {
        keyword: "grief",
        answer: "Grief is a natural response to loss. Allow yourself to feel your emotions and seek support from loved ones or a grief counselor."
    },
    {
        keyword: "motivation",
        answer: "When motivation is low, set small, achievable goals and celebrate your progress. Find activities that inspire you and seek support from others."
    },
    {
        keyword: "coping",
        answer: "Coping skills can help manage stress and emotions. Techniques like journaling, creative activities, and talking to someone you trust can be effective."
    },
    {
        keyword: "hi",
        answer: "Hello! I'm here to support you. How can I help you today?"
    },
    {
        keyword: "hello",
        answer: "Hi there! I'm here to listen and help in any way I can. What would you like to talk about?"
    },
    {
        keyword: "how are you",
        answer: "Thank you for asking. I'm here to provide support and understanding. How are you feeling today?"
    },
    {
        keyword: "lonely",
        answer: "Feeling lonely can be really tough. Try reaching out to a friend, joining a support group, or even talking to a mental health professional. You're not alone."
    },
    {
        keyword:"happy",
        answer: "Oh thats good, Staying happy is good for your health and it is good for your peers also, try to maintain this happiness in any situation."
    }
];

function getAnswer(userInput) {
    const keyword = faqData.find(faqItem => userInput.toLowerCase().includes(faqItem.keyword));
    return keyword ? keyword.answer : "I'm here for you. Let's talk and find a way through this together.";
}

document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    if (userInput.trim()) {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = `You: ${userInput}`;
        chatBox.appendChild(userMessage);

        const botAnswer = getAnswer(userInput);
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = `Support: ${botAnswer}`;
        chatBox.appendChild(botMessage);

        document.getElementById('user-input').value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
