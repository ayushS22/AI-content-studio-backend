//require("@huggingface/inference") returns an object
//From that object, we take InferenceClient
//We are importing a class(InferenceClient) that helps us talk to Hugging Face AI.
const { InferenceClient } = require("@huggingface/inference");
// We create an instance (object) of InferenceClient
// We pass an API key
// process.env.HUGGING_FACE_API_KEY
// Reads the key from .env
// Keeps it secure (not written in code)
const client = new InferenceClient(process.env.HUGGING_FACE_API_KEY);//creating object

module.exports = client;

// Why are we creating an object?

// Because InferenceClient is a class, not a ready-made object.

// So you must create an instance (object) to actually use it.
