const express = require('express');
const CharacterAI = require('node_characterai');

const app = express();
const port = 8000;

const characterAI = new CharacterAI();

async function initialize() {
  await characterAI.authenticateAsGuest();
  
  
  
  app.get('/', async (req, res) => {
    try {
      const characterId = req.query.cid || "gF1ORZXTZIvZqprJaIPpE-aLLavJrNXYZLiKJ-ktRkY";
      const chat = await characterAI.createOrContinueChat(characterId);
      const prompt = req.query.prompt || "Hey!";
      const response = await chat.sendAndAwaitResponse(prompt, true);
      res.json({ text: response.text, prompt: prompt });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
}

(async () => {
  await initialize();
  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });
})();
