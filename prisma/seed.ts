import { PrismaClient } from "@prisma/client";
import axios from "axios";

export const data = 
[{"title":"Shortbus","year":2003,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Efectos secundarios","year":2009,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Divorce Iranian Style","year":2005,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"For a Good Time, Call...","year":2001,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Melinda and Melinda","year":1987,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Shiver of the Vampires, The (Frisson des vampires, Le)","year":1986,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Terminal USA","year":2000,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Luther","year":1995,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Killing Them Softly","year":2001,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Territories ","year":2007,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Great Day in Harlem, A","year":1994,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Eden of the East the Movie I: The King of Eden (Higashi no Eden Gekijoban)","year":2002,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Two Can Play That Game","year":2010,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Temptations, The","year":2005,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Attack of the Mushroom People (Matango)","year":1996,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Bells from the Deep","year":1999,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Ned Kelly","year":1985,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"And Soon the Darkness","year":2010,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Schlussmacher","year":1997,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Hollow Man","year":2001,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Contempt (Mépris, Le)","year":2008,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"All Good Things","year":1999,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Rock, Paper, Scissors: The Way of the Tosser","year":2002,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Coven","year":2009,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Solo","year":1998,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Monster","year":2008,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Food (Jídlo)","year":2002,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"My Brother Tom","year":2008,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Kabul Express","year":2011,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Death Watch (La Mort en Direct)","year":2009,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Name for Evil, A","year":2006,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Sophie's Revenge (Fei chang wan mei)","year":1995,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"I'm Gonna Explode (a.k.a. I'm Going to Explode) (Voy a explotar)","year":1996,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"My Kid Could Paint That","year":2002,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Bad Timing: A Sensual Obsession","year":1989,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"First Sunday","year":1999,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Flywheel","year":2001,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"One Small Hitch","year":1994,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Friday the 13th Part VII: The New Blood","year":2001,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Mozart and the Whale","year":1995,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Music Lovers, The","year":1996,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Orlando","year":1992,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Secret Garden, The","year":2001,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Juan of the Dead (Juan de los Muertos)","year":1992,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Day of the Beast, The (Día de la Bestia, El)","year":1987,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Man About Town","year":1990,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Son of Rambow","year":2010,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"No Flesh Shall Be Spared","year":2006,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"This Girl's Life","year":1991,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"All Blossoms Again: Pedro Costa, Director (Tout refleurit: Pedro Costa, cinéaste)","year":2009,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Frank","year":2011,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Generation X","year":2008,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Tinker Tailor Soldier Spy","year":1995,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Nancy Goes to Rio","year":1992,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Monster Walks, The","year":2009,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Stranger in the House","year":2005,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Dandelion","year":1992,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Weary River","year":1989,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Operation Ganymed","year":2010,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"California","year":2011,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Analyze This","year":2000,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Valley of Decision, The","year":2000,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Veronika Voss (Sehnsucht der Veronika Voss, Die)","year":1994,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Captain Kidd","year":2013,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"True Lies","year":2009,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Pretty Woman","year":2004,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Hail Columbia!","year":1988,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Eve's Bayou","year":1996,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Moonlight and Cactus","year":1996,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Life and Times of Judge Roy Bean, The","year":1992,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Eighth Day, The (Den Åttonde dagen)","year":2006,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Chain Lightning","year":2007,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Griffin & Phoenix","year":2009,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Little Thief, The (Le petit voleur)","year":1993,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Night at the Opera, A","year":1963,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Comedy of Terrors, The","year":2004,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Pokémon the Movie: Black - Victini and Reshiram","year":2006,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Attenberg","year":2001,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Birds, the Bees and the Italians, The (Signore & signori)","year":1992,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Fuck Up","year":1994,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Decampitated","year":2004,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Maximum Risk","year":2007,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Alfie","year":2005,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Legion of the Dead","year":2008,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Dischord","year":2008,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Kuffs","year":2001,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Attila","year":1996,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Night of the Ghouls","year":2007,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Boxing Helena","year":1981,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Dawn of the Planet of the Apes","year":1997,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Hero: Love Story of a Spy, The","year":1989,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Raging Bull","year":1996,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Dreamcatcher","year":1987,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Miss Annie Rooney","year":2003,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Aftershock (Tangshan dadizhen)","year":2004,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Life of Jesus, The (La vie de Jésus)","year":1993,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"SpaceCamp","year":1994,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"},
{"title":"Sympathy for the Devil","year":1978,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"fiction"},
{"title":"Thomas Pynchon: A Journey into the Mind of P.","year":1998,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"nonfiction"},
{"title":"Spirit Trap","year":1996,"publisher":{"name":"Paris Review","avatar":"https://picsum.photos/200"},"genre":"poetry"}
];

const prisma = new PrismaClient();

async function main() {
  // const { data } = await axios.get("https://drive.google.com/file/d/1TGy8UH0zEio1r_OB_bDo6PZ2MrnJPr2b/view?usp=sharing");
  // console.log(data);
  const publisher = await prisma.publisher.create({
    data: {
      name: "Paris Review",
      avatar: "https://picsum.photos/200",
    },
  });
  console.log(publisher);
  const user = await prisma.user.create({
    data: {
      name: "Tove Jansson",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tove_Jansson_with_flower_crown_001.tiff/lossy-page1-640px-Tove_Jansson_with_flower_crown_001.tiff.jpg",
      works: {
        createMany: {
          data: data.map((work: any) => ({
            title: work.title,
            year: work.year,
            genre: work.genre,
            publisherId: publisher.id,
          })),
        },
      },
    },
  });

  console.log(user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
