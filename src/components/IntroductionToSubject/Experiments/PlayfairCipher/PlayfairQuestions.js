const playfairQuestions = [
    {
        "Sno": 1,
        "question": "What is the Playfair matrix used for?",
        "options": [
            "Encrypting text",
            "Sorting data",
            "Creating random numbers",
            "Drawing graphs"
        ],
        "correctAns": "1"
    },
    {
        "Sno": 2,
        "question": "How many letters are typically used in a Playfair matrix?",
        "options": [
            "24",
            "25",
            "26",
            "27"
        ],
        "correctAns": "3"
    },
    {
        "Sno": 3,
        "question": "In a Playfair matrix, what happens if a letter pair is in the same row?",
        "options": [
            "They are encrypted as is",
            "They are swapped",
            "They are shifted to the right",
            "They are shifted to the left"
        ],
        "correctAns": "2"
    },
    {
        "Sno": 4,
        "question": "Which of the following is a key property of the Playfair matrix?",
        "options": [
            "Diagonal letters are always different",
            "All rows and columns contain unique letters",
            "The matrix is always a square",
            "The last row and column are always the same"
        ],
        "correctAns": "1"
    },
    {
        "Sno": 5,
        "question": "What is the main advantage of using a Playfair matrix in encryption?",
        "options": [
            "It is highly resistant to brute force attacks",
            "It can handle any type of data",
            "It requires less computational power",
            "It has a simple and fast key generation process"
        ],
        "correctAns": "1"
    },
    {
        "Sno": 6,
        "question": "Which step is NOT part of the Playfair matrix encryption process?",
        "options": [
            "Choosing a key",
            "Creating the matrix",
            "Swapping specific letters",
            "Encrypting letter pairs"
        ],
        "correctAns": "3"
    },
    {
        "Sno": 7,
        "question": "In the Playfair matrix, what happens if a letter pair forms a rectangle?",
        "options": [
            "They are encrypted as is",
            "They are swapped diagonally",
            "They are swapped vertically",
            "They are swapped horizontally"
        ],
        "correctAns": "4"
    },
    {
        "Sno": 8,
        "question": "Which letter is typically excluded from a Playfair matrix?",
        "options": [
            "X",
            "Q",
            "Z",
            "J"
        ],
        "correctAns": "4"
    },
    {
        "Sno": 9,
        "question": "What is the alternative name of playfair cipher?",
        "options": [
            "Wadsworth’s cipher",
            "Wheatstone playfair cipher",
            "Playfair rectangle",
            "Wheatstone cipher"
        ],
        "correctAns": "2"
    },
    {
        "Sno": 10,
        "question": "In the Playfair matrix, what happens if a letter pair is in the same column?",
        "options": [
            "They are encrypted as is",
            "They are swapped",
            "They are shifted up",
            "They are shifted down"
        ],
        "correctAns": "3"
    }
];
const correctAns = [1, 3, 3, 1, 1, 3, 2, 4, 2, 4];

export { correctAns };

export default playfairQuestions;


