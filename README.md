# ML Tourism Chatbot

This is an ML-powered chatbot designed to provide information and assistance related to Andaman tourism. The chatbot is trained using Natural Language Toolkit (NLTK) packages and a Feed Forward Neural Network model.

## Sample
![](https://github.com/Praveenvuddagiri/ChatBotTourism/blob/master/20230613_184526.gif)

[![Video](video_thumbnail_image_url)](https://github.com/Praveenvuddagiri/ChatBotTourism/blob/master/20230613_184526.gif)


## Dataset

The dataset used for training the chatbot consists of various question-answer pairs related to Andaman tourism. Each data entry in the dataset contains the following information:

- `tag`: A label representing the category or intent of the question.
- `patterns`: A list of possible user inputs or questions.
- `responses`: A list of corresponding responses to provide based on the user input.

Here is a sample data entry from the dataset:

```json
"dataset": [
  {
    "tag": "greeting",
    "patterns": [
      "Hi",
      "Hello",
      "How are you",
      "Is anyone there",
      "Hey",
      "Good day"
    ],
    "responses": [
      "Hello, thanks for visiting",
      "Hi there, what can I do for you?",
      "Hi there, how can I help?",
      "Hello, how May I help you?"
    ]
  },
  ...
]
```

The dataset consists of multiple such entries covering different topics and user intents.

## Dependencies

The ML Tourism Chatbot relies on the following dependencies:

- NLTK: A powerful library for natural language processing tasks.
- Feed Forward Neural Networks: A type of neural network used for training the chatbot model.
- Django: A web framework used to connect the chatbot to an HTML/CSS web interface.
- Other requirements are mentioned in requirements.txt file.

## Usage

To use the chatbot, follow these steps:

1. Install the required dependencies by running the following command:
   ```
   pip install nltk django torch numpy
   ```

2. Clone the repository and navigate to the project directory:
   ```
   git clone <repository_url>
   cd ml-tourism-chatbot
   ```

3. Train the chatbot model using the provided dataset:
   ```
   python train_model.py
   ```

4. Start the Django server to connect the chatbot to the web interface:
   ```
   python manage.py runserver
   ```

5. Access the chatbot interface by opening a web browser and visiting the provided URL.

6. Interact with the chatbot by entering questions or queries related to Andaman tourism.

## Feedback and Contributions

Feedback, bug reports, and contributions are welcome! If you encounter any issues or have suggestions for improvement, please submit an issue or pull request to the GitHub repository.
