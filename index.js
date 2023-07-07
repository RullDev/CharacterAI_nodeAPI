const express = require('express');
const CharacterAI = require('node_characterai');

const app = express();
const port = 8000;

const characterAI = new CharacterAI();

async function initialize() {
  await characterAI.authenticateAsGuest();
  
  const characterId = "RQrrOj-UNdEV2_PC5D03US-27MZ7EUtaRH_husjbRQA";
  const chat = await characterAI.createOrContinueChat(characterId);
  
  app.get('/', async (req, res) => {
    
    const prompt = req.query.prompt;
    const response = await chat.sendAndAwaitResponse(prompt, true);
    res.json({ text: response.text });
  });
}

(async () => {
  await initialize();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
