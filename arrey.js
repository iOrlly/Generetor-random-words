const listA1 = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
  "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
  "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
  "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
  "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
  "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
  "even", "new", "want", "because", "any", "these", "give", "day", "most", "us",
  "is", "are", "was", "were", "been", "being", "has", "had", "did", "doing",
  "right", "mean", "old", "big", "same", "tell", "boy", "girl", "man", "men",
  "woman", "women", "child", "children", "part", "turn", "here", "why", "ask", "went",
  "read", "need", "land", "different", "home", "move", "try", "kind", "hand", "picture",
  "again", "change", "off", "play", "spell", "air", "away", "animal", "house", "point",
  "page", "letter", "mother", "answer", "found", "study", "still", "learn", "should", "world",
  "high", "every", "near", "add", "food", "between", "own", "below", "country", "plant",
  "last", "school", "father", "keep", "tree", "never", "start", "city", "earth", "eyes",
  "light", "thought", "head", "under", "story", "saw", "left", "don't", "few", "while",
  "along", "might", "close", "something", "seem", "next", "hard", "open", "example", "begin",
  "life", "always", "those", "both", "paper", "together", "got", "group", "often", "run",
  "important", "until", "side", "feet", "car", "mile", "night", "walk", "white", "sea",
  "began", "grow", "took", "river", "four", "carry", "state", "once", "book", "hear",
  "stop", "without", "second", "late", "miss", "idea", "enough", "eat", "face", "watch",
  "far", "real", "almost", "let", "above", "sometimes", "mountains", "cut", "young", "talk"
];

const listA2 = [...listA1,
  "soon", "list", "song", "leave", "family", "it's", "body", "music", "color", "stand",
  "sun", "questions", "fish", "area", "mark", "dog", "horse", "birds", "problem", "complete",
  "room", "knew", "since", "ever", "piece", "told", "usually", "didn't", "friends", "easy",
  "heard", "order", "red", "door", "sure", "become", "top", "ship", "across", "today",
  "during", "short", "better", "best", "however", "low", "hours", "black", "products", "happened",
  "whole", "measure", "remember", "early", "waves", "reached", "listen", "wind", "rock", "space",
  "covered", "fast", "several", "hold", "himself", "toward", "five", "step", "morning", "passed",
  "vowel", "true", "hundred", "against", "pattern", "numeral", "table", "north", "slowly", "money",
  "map", "farm", "pulled", "draw", "voice", "seen", "cold", "cried", "plan", "notice",
  "south", "sing", "war", "ground", "fall", "king", "town", "I'll", "unit", "figure",
  "certain", "field", "travel", "wood", "fire", "upon", "done", "English", "road", "halt",
  "ten", "fly", "gave", "box", "finally", "wait", "correct", "oh", "quickly", "person",
  "became", "shown", "minutes", "strong", "verb", "stars", "front", "feel", "fact", "inches",
  "street", "decided", "contain", "course", "surface", "produce", "building", "ocean", "class", "note",
  "nothing", "rest", "carefully", "scientists", "inside", "wheels", "stay", "green", "known", "island",
  "week", "less", "machine", "base", "ago", "stood", "plane", "system", "behind", "ran",
  "round", "boat", "game", "force", "brought", "understand", "warm", "common", "bring", "explain",
  "dry", "though", "language", "shape", "deep", "thousands", "yes", "clear", "equation", "yet",
  "government", "filled", "heat", "full", "hot", "check", "object", "am", "rule", "among",
  "noun", "power", "cannot", "able", "six", "size", "dark", "ball", "material", "special",
  "heavy", "fine", "pair", "circle", "include", "built", "can't", "matter", "square", "syllables",
  "perhaps", "bill", "felt", "suddenly", "test", "direction", "center", "farmers", "ready", "anything",
  "divided", "general", "energy", "subject", "Europe", "moon", "region", "return", "believe", "dance",
  "members", "picked", "simple", "cells", "paint", "mind", "love", "cause", "rain", "exercise",
  "eggs", "train", "blue", "wish", "drop", "developed", "window", "difference", "distance", "heart"
];

const listB1 = [...listA2,
  "sit", "sum", "summer", "wall", "forest", "probably", "legs", "sat", "main", "winter",
  "wide", "written", "length", "reason", "kept", "interest", "arms", "brother", "race", "present",
  "beautiful", "store", "job", "edge", "past", "sign", "record", "finished", "discovered", "wild",
  "happy", "beside", "gone", "sky", "glass", "million", "west", "lay", "weather", "root",
  "instruments", "meet", "third", "months", "paragraph", "raised", "represent", "soft", "whether", "clothes",
  "flowers", "shall", "teacher", "held", "describe", "drive", "cross", "speak", "solve", "appear",
  "metal", "son", "either", "ice", "sleep", "village", "factors", "result", "jumped", "snow",
  "ride", "care", "floor", "hill", "pushed", "baby", "buy", "century", "outside", "everything",
  "tall", "already", "instead", "phrase", "soil", "bed", "copy", "free", "hope", "spring",
  "case", "laughed", "nation", "quite", "type", "themselves", "temperature", "bright", "lead", "everyone",
  "method", "section", "lake", "iron", "within", "dictionary", "hair", "age", "amount", "scale",
  "pounds", "although", "per", "broken", "moment", "tiny", "possible", "gold", "milk", "quiet",
  "natural", "lot", "stone", "act", "build", "middle", "speed", "count", "consonant", "someone",
  "sail", "rolled", "bear", "wonder", "smiled", "angle", "fraction", "Africa", "killed", "melody",
  "bottom", "trip", "hole", "poor", "let's", "fight", "surprise", "French", "died", "beat",
  "exactly", "remain", "dress", "cat", "couldn't", "fingers", "row", "least", "catch", "climbed",
  "wrote", "shouted", "continued", "itself", "else", "plains", "gas", "England", "burning", "design",
  "joined", "foot", "law", "ears", "grass", "you're", "grew", "skin", "valley", "cents",
  "key", "president", "brown", "trouble", "cool", "cloud", "lost", "sent", "symbols", "wear",
  "bad", "save", "experiment", "engine", "alone", "drawing", "east", "choose", "single", "touch",
  "information", "express", "mouth", "yard", "equal", "decimal", "yourself", "control", "practice", "report",
  "straight", "rise", "statement", "stick", "party", "seeds", "suppose", "woman", "coast", "bank",
  "period", "wire", "pay", "clean", "visit", "bit", "whose", "received", "garden", "please",
  "strange", "caught", "fell", "team", "God", "captain", "direct", "ring", "serve", "child",
  "desert", "increase", "history", "cost", "maybe", "business", "separate", "break", "uncle", "hunting",
  "art", "feeling", "supply", "corner", "fit", "addition", "belong", "safe", "soldiers", "guess",
  "silent", "trade", "rather", "compare", "crowd", "poem", "enjoy", "elements", "indicate", "except",
  "expect", "flat", "seven", "interesting", "sense", "string", "blow", "famous", "value", "wings",
  "movement", "pole", "exciting", "branches", "thick", "blood", "lie", "spot", "bell", "fun",
  "loud", "consider", "suggest", "thin", "position", "entered", "fruit", "tied", "rich", "dollars",
  "send", "sight", "chief", "Japanese", "stream", "planets", "rhythm", "eight", "science", "major",
  "observe", "tube", "necessary", "weight", "meat", "lifted", "process", "army", "hat", "property",
  "particular", "swim", "terms", "current", "park", "sell", "shoulder", "industry", "wash", "block",
  "spread", "cattle", "wife", "sharp", "company", "radio", "we'll", "action", "capital", "factories",
  "settled", "yellow", "isn't", "southern", "truck", "fair", "printed", "wouldn't", "ahead", "chance",
  "born", "level", "triangle", "molecules", "France", "repeated", "column", "western", "church", "sister",
  "oxygen", "plural", "various", "agreed", "opposite", "wrong", "chart", "prepared", "pretty", "solution",
  "fresh", "shop", "suffix", "especially", "shoes", "actually", "nose", "afraid", "dead", "sugar",
  "office", "huge", "gun", "similar", "death", "score", "forward", "stretched", "experience", "rose",
  "allow", "fear", "workers", "Washington", "Greek", "women", "bought", "led", "march", "northern",
  "create", "British", "difficult", "match", "win", "doesn't", "steel", "total", "deal", "determine",
  "evening", "hoe", "rope", "cotton", "apple", "details", "entire", "corn", "substances", "smell",
  "tools", "conditions", "cows", "track", "arrived", "located", "sir", "seat", "division", "effect",
  "underline", "view"
]
const words = {
  A1: listA1,
  A2: listA2,
  B1: listB1
};

let nivelAtual = "A1";

function refreshWords() {
  const wordListElement = document.getElementById("wordList");
  const textWords = document.createElement("p");
  
  const list = words[nivelAtual]

  const randomWords = [];
  
  for (let i=0; i<10; i++) {
    const randomIndex = Math.floor(Math.random() * list.length);
    randomWords.push(list[randomIndex]);
  }
  textWords.textContent = randomWords.join(", ");
  wordListElement.innerHTML = "";
  wordListElement.appendChild(textWords);
}

function showWords(nivel) {
  nivelAtual = nivel;

  const accordian = document.querySelector('details');
  if(accordian) {
    accordian.open = false; // Isso faz o menu minimizar instantaneamente
  }
  
  document.querySelectorAll(".options").forEach(el => {
    el.style.fontWeight = "normal";
    el.style.color="black";
    el.style.backgroundcolor="transparent"
  });

  const elementoSelecionado = document.getElementById("wordList" + nivel);
    if (elementoSelecionado) {
        elementoSelecionado.style.fontWeight = "bold";
        elementoSelecionado.style.color = "#007bff";
        elementoSelecionado.style.backgroundColor = "#e7f3ff";
        elementoSelecionado.style.borderRadius = "4px";
    }

  const tituloNivel = document.getElementById("tituloNivelAtual");
  if(tituloNivel) {
    tituloNivel.textContent = "Nível selecionado: " + nivel;
  }

  refreshWords()
}