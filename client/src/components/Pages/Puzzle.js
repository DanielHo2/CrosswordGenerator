import React from "react";
import ClueList from "../Crossword/ClueList.js";
import { generateCrossword } from '../Crossword/CrosswordAlgorithm.js'
import CrosswordPuzzle from "../Crossword/CrosswordPuzzle.js";

let test_json = {
  clue_list: [
    { word: "Paradox", clue: "A seemingly contradictory statement that may be true" },
    { word: "Ambiguous", clue: "Open to more than one interpretation; unclear" },
    { word: "Infamous", clue: "Well-known for a bad quality or deed" },
    { word: "Belligerent", clue: "Hostile and aggressive; ready to fight" },
    { word: "Cryptic", clue: "Mysterious; having a hidden meaning" },
    { word: "Euphoria", clue: "A feeling of great happiness or well-being" },
    { word: "Serendipity", clue: "A fortunate and unexpected discovery" },
    { word: "Epiphany", clue: "A sudden realization or discovery" },
    { word: "Quixotic", clue: "Idealistic but impractical; overly optimistic" },
    { word: "Pensive", clue: "Engaged in deep and serious thought" },
    { word: "Rhapsody", clue: "An exuberant instrumental composition" },
    { word: "Elusive", clue: "Difficult to find, catch, or achieve" },
    { word: "Enigmatic", clue: "Mysterious and difficult to understand" },
    { word: "Nostalgia", clue: "A sentimental longing or wistful affection" },
    { word: "Melancholy", clue: "A feeling of sadness or depression" },
    { word: "Clandestine", clue: "Done in secret or kept hidden" },
    { word: "Hilarity", clue: "Great merriment and laughter" },
    { word: "Surreal", clue: "Having the quality of a dream; unreal" },
    { word: "Jubilant", clue: "Feeling or expressing great happiness or triumph" },
    { word: "Voracious", clue: "Having a huge appetite; excessively eager" },
    { word: "Exquisite", clue: "Delicately beautiful or rare" },
    { word: "Indignant", clue: "Feeling or showing anger or annoyance" },
    { word: "Furtive", clue: "Attempting to avoid notice or attention" },
    { word: "Incessant", clue: "Continuing without pause or interruption" },
    { word: "Insidious", clue: "Proceeding in a gradual, subtle way, but with harmful effects" },
    { word: "Luminous", clue: "Full of light; shining especially in the dark" },
    { word: "Mundane", clue: "Lacking interest or excitement; dull" },
    { word: "Perplexed", clue: "Completely baffled; very puzzled" },
    { word: "Plethora", clue: "A large or excessive amount of something" },
    { word: "Ravenous", clue: "Extremely hungry" },
    { word: "Sardonic", clue: "Scornful; mocking; cynical" },
    { word: "Surreptitious", clue: "Done or made secretly, in a way that avoids notice" },
    { word: "Trepidation", clue: "A feeling of fear or agitation about something that may happen" },
    { word: "Ubiquitous", clue: "Present, appearing, or found everywhere" },
    { word: "Vexatious", clue: "Causing annoyance, frustration, or worry" },
    { word: "Vindictive", clue: "Having or showing a strong desire for revenge" },
    { word: "Whimsical", clue: "Playfully quaint or fanciful, especially in an appealing way" },
    { word: "Zephyr", clue: "A soft, gentle breeze" },
    { word: "Zenith", clue: "The highest point reached by a celestial or other object" }
  ]
}
let TEST_QUERY = 'Hardcoded Crossword Puzzle :D'

const SIZE = 30
const BOARD_SIZE = 15 //minimum 15 for good results

function Puzzle(props) {
  const word_list = test_json.clue_list.map((element) =>{
    return element.word
  })

  let crossword = generateCrossword(BOARD_SIZE, word_list)

  console.log(crossword)

  return (
    <>
      {/* Puzzle Section  */}
      <section className="about">
        <div className="container">
          <div className="about-box">
            <h1>{TEST_QUERY}</h1>
            <CrosswordPuzzle crossword={crossword} size={SIZE} />
            <ClueList clue_list={test_json.clue_list} clue_data={crossword.clue_data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Puzzle;