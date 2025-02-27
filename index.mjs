import { ChatOllama } from "@langchain/ollama";

const model = new ChatOllama({
  model: "llama3.2",  // Default value.
});

const result = await model.invoke(["human", "Hello, how are you?"]);
console.log(result.content);