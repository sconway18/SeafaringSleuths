var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-grade-2-m1",
  "level": "1",
  "url": "sec-grade-2-m1.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Sunken Treasure",
  "body": " The Sunken Treasure   Note: This is simply a Proof of Concept and prototype, designed to show what is possible within a PreTeXt environment. The story was written complete by ChatGPT at this time and is unedited. While we may utilize ChatGPT for help with storyboarding, as a general rule, we will use ChatGPT as a collaborator and copy-editor rather than relying on it for total authorship responsibilities.  Deep beneath the ocean waves, aboard the submarine SS Curiosity, the Seafaring Sleuths gathered around a mysterious ancient map. The map, discovered by Captain Lily and her crew during a routine exploration, hinted at the location of a legendary sunken treasure.  \"According to this map,\" Captain Lily began, pointing to a series of faded markings, \"the treasure lies at the coordinates (45, 60). That's southeast of our current position.\"  A Navigation Plan  Determine how many kilometers east (right) and how many kilometers south (down) Captail Lily and the Seafaring Sleuths should sail in order to arrive at the location of the sunken treasure.   Excitement filled the air as the Sleuths, including the brilliant mathematician Max, the curious scientist Mia, and the adventurous engineer Alex, prepared for their next adventure. With their trusty robot companion, Bit, they set course for the treasure.  As the submarine dove deeper into the ocean, Max studied the map intently. \"We're currently in the fourth quadrant,\" he announced, using his knowledge of coordinates to guide the Curiosity towards their destination.  Hours passed as the submarine navigated through the depths, encountering schools of fish and colorful coral reefs. Finally, they reached the coordinates, only to find the treasure chest surrounded by a dense layer of seaweed.  \"Why is the seaweed floating on the surface instead of sinking to the bottom?\" Mia wondered aloud, recalling her lessons on density. \"It must be less dense than water,\" she concluded, as the Sleuths used their robotic arms to clear a path to the treasure.  With the seaweed cleared, the Sleuths approached the treasure chest, which was covered in intricate carvings. Alex, with his knack for puzzles, quickly deciphered the lock mechanism and opened the chest to reveal ancient artifacts inside.  Among the artifacts was a scroll with a clue leading to their next adventure. \"It seems our journey isn't over yet,\" Captain Lily exclaimed, as the Sleuths eagerly prepared to uncover the next mystery.  As the SS Curiosity set course for their next destination, the Seafaring Sleuths reflected on their adventure. Through teamwork, curiosity, and a little bit of math and science, they had uncovered a treasure beyond their wildest dreams.  And so, the adventures of the Seafaring Sleuths continued, as they sailed the seas in search of new mysteries to solve and new treasures to discover.  "
},
{
  "id": "sec-grade-2-m1-5",
  "level": "2",
  "url": "sec-grade-2-m1.html#sec-grade-2-m1-5",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "A Navigation Plan.",
  "body": "A Navigation Plan  Determine how many kilometers east (right) and how many kilometers south (down) Captail Lily and the Seafaring Sleuths should sail in order to arrive at the location of the sunken treasure.  "
},
{
  "id": "sec-grade-2-m2",
  "level": "1",
  "url": "sec-grade-2-m2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Title",
  "body": " Title  I am going to write a second story here.  A Random Problem   "
},
{
  "id": "sec-grade-2-m2-3",
  "level": "2",
  "url": "sec-grade-2-m2.html#sec-grade-2-m2-3",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "A Random Problem.",
  "body": "A Random Problem  "
},
{
  "id": "sec-grade-6-m1",
  "level": "1",
  "url": "sec-grade-6-m1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Title",
  "body": " Title  I am going to write a second story here.  A Random Problem   "
},
{
  "id": "sec-grade-6-m1-3",
  "level": "2",
  "url": "sec-grade-6-m1.html#sec-grade-6-m1-3",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "A Random Problem.",
  "body": "A Random Problem  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
