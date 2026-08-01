export type QA = {
  question: string;
  answer: string[];
};

export type InterviewSection = {
  heading: string;
  items: QA[];
};

export const interviewMeta = {
  slug: "inside-physical-commodity-trading",
  title: "Inside Physical Commodity Trading",
  subtitle: "An Interview with Samuel Basi",
  category: "INTERVIEW",
  division: "COMMODITIES",
  interviewer: "James Bridel",
  readingTime: "18 min read",
  standfirst:
    "Samuel Basi spent 11 years at Trafigura, moving from operations to the hedge desk and into physical metals trading, before building a derivatives desk at a smaller trading house. He is the author of The Physical Trade and Perfectly Hedged, and in November 2023 founded Perfectly Hedged LLC, a risk management consultancy working with companies across the commodity supply chain. He spoke to James Bridel.",
};

export const interviewSections: InterviewSection[] = [
  {
    heading: "The mechanics of physical trading",
    items: [
      {
        question:
          "To start with the basics: what is physical commodity trading, and how does it differ from the financial trading most people are familiar with?",
        answer: [
          "Most people are familiar with financial trading: equity and stock markets, where you're buying and selling paper derivatives of a company and partaking in the upside and downside of its profit and loss. Physical trading involves the actual buying and selling of the commodity itself, whether from a producer, another trader, a warehouse or a storage facility, and then handling the physical logistics to move it from point A to point B, whether that's from a producer into storage and on to an end consumer, or buying it at some stage in that chain and moving it to the end consumer.",
          "Physical trading is all about creating value for a producer and/or a consumer. You're the middleman in that operation: the reason a producer isn't selling directly to a consumer, or a consumer isn't buying directly from a producer. The role of a physical trader is to create that value, whether through logistics, financing or any number of other reasons, and to connect the two opposite ends of the supply chain by physically moving material from one point to another.",
        ],
      },
      {
        question:
          "You've mentioned the logistics involved and the differences from paper trading. Could you give us a step-by-step walkthrough of a trade, from the moment you spot an opportunity to the moment it settles?",
        answer: [
          "Sure. There are multiple reasons an opportunity might exist. It could be a logistics opportunity: a producer that doesn't want to handle the shipping from the point of production in South America to the point of consumption somewhere in Asia. It could be a relationship factor: they simply don't have the link to that end consumer because they're more regional in how they produce or consume. Or it could be a financing issue, whereby as a trader you're able to pay a producer at the point of production, when they need to generate cash flow, and extend credit to a consumer.",
          "Whatever the reason, once you've spotted that opportunity, you'll typically already have relationships developed on an ongoing, multi-year basis, and it's about understanding the flows of that commodity. A lot of commodities have annual negotiating periods; in metals, for example, a lot of long-term contracts for the following year are negotiated between October and November. Whether it's the spot market or the long-term market, it typically involves understanding both producer and consumer needs and then negotiating those contracts. That might be a spot deal, buying an existing shipment from a producer and allocating it to any number of consumers with different needs and specifications, or a more strategic long-term deal, building a long or short position, a footprint in the market that you can allocate as you see fit throughout the year.",
          "In terms of the stages themselves, you'll have a negotiation with the producer that sets the volume, how the commodity will be priced, and when and where it will be delivered: whether it's picked up at the point of production, on a vessel or in a warehouse, and where title and risk will transfer. Then the same on the sale. One of the reasons physical traders exist is that a lot of consumers don't want to handle the logistics; they want the commodity delivered to their point of consumption. So again, you're negotiating the volume, the timing, the delivery point and the credit terms. Will they pay you before they've taken title, or are you on net 90 terms, where the material is delivered and you won't receive the funds until a set period afterwards? All of this is negotiated in advance, and somewhere in there the trader should have created value to facilitate the trade on both sides.",
        ],
      },
      {
        question:
          "You buy from a producer or a vessel and match it to another buyer, but there's often a mismatch in volumes. A producer might sell you 100 tonnes when a buyer only wants 60. How do you manage those mismatches and deal with the excess?",
        answer: [
          "Part of the reason a trader exists is that mismatch. A producer producing 100 tonnes, 100,000 barrels, whatever it is, wants to be able to sell that in one clip. They don't want to have to find a buyer for 40%, a buyer for 20% and another buyer for 30%. So a trader can step in and buy 100% of that production. They may have an immediate buyer for half of it; for the balance, they may store the material and take advantage of some of the derivative aspects, like the carry trade, where they can actually earn money rolling the derivative position until they find a buyer.",
          "A trader's role isn't to perfectly allocate 100% of production to one consumer that will buy 100% of it. They may have a book of a few producers but a consumption book of 20 consumers, which lets them allocate not just geographically but on timing as well: consumer A requires a certain volume per month, and the same for consumers B, C and D. Part of the trader's job is to distribute a typically larger volume of production across a larger number of smaller consumers.",
        ],
      },
      {
        question:
          "You wrote a book on hedging for middle and back office operators. Can you walk us through exactly what hedging is, and why you wrote a book specifically for the middle and back office?",
        answer: [
          "Hedging is mitigating the risk that the underlying price of a commodity will change and impact the P&L of the physical trade. If you buy a commodity at a certain price, don't hedge, and the price decreases by the time you make the physical sale, you're going to take a loss on the outright price: you're essentially buying high and selling low. When you hedge, you're creating an environment where, if executed correctly, the price moving up or down between fixing your physical purchase and your physical sale won't impact the profit of the trade. When we buy physical, we sell futures as a hedge; when we sell physical, we buy futures. A hedge is an equal and opposite position in the derivatives market to your physical trade.",
          "The reason I wrote it for the middle and back office is twofold. First, it's often the middle office that handles the hedging activity: operations, schedulers, the risk desk, a deals desk or a hedge desk itself. The traders making the physical trades often delegate the hedging down to a different desk, so it's those desks that are typically organising and executing the hedges. Secondly, many of these functions can impact the hedging on a day-to-day basis, whether through the timing around logistics or the volume of a commodity that's delivered. It's often overlooked how impactful the middle and back office can be when it comes to risk.",
          "Having taught a lot of those departments about risk management during my trading career, it became obvious that there was a significant gap in knowledge about what risk is, how it's created and how it's affected by the day-to-day decisions those departments make. The aim of the book was to empower those employees to make conscious decisions that, at a bare minimum, don't create a loss, and at best have a positive impact on risk management.",
        ],
      },
    ],
  },
  {
    heading: "Breaking in and moving up",
    items: [
      {
        question: "What first drew you to the industry?",
        answer: [
          "Aside from graduating just after the great financial crash and being willing to take any job that was available, I think in physical commodities you get to see, and have an impact on, a global scale. It's not simply numbers flashing up on a screen. It's taking a physical asset from one point to another, seeing that value creation and understanding the global flows of material and how important they are to everyday life. That nuance is sometimes missed when you're purely looking at derivative trading.",
        ],
      },
      {
        question:
          "You've talked about training younger operators, and you yourself went from operations to physical trading by 24, which is fast. Why is starting in operations important, and how did you move up so quickly?",
        answer: [
          "On the first question, operations, or some kind of middle office function, is the best possible place to start in physical trading, because it touches so many aspects of the job of a physical trader. The middle office typically interacts directly with the front office, so you see and absorb a lot of information by sitting with your traders, understanding the flow and the needs of their customers. You also develop negotiation skills dealing with logistics and service providers, because a large part of the physical P&L isn't determined by the terms of the deal itself but by secondary factors: logistics costs, timing, and making sure things are executed properly. It gives you a real view into the profit and loss behind day-to-day decision-making.",
          "Just as importantly, it gives you an insight into the back office: finance, accounting, treasury. You learn how quickly a missed payment can damage a long-term relationship or a deal-making process. You learn how P&Ls are formed. What is mark to market? How does it work? I've seen traders skip that step, and it puts them at a disadvantage in negotiations, because they may promise something that cannot be delivered by the finance team. It varies from company to company, but that middle office function gives you the largest exposure to the largest number of desks at a trading house.",
          "As for what sped up my ascent into trading, luck and being in the right place at the right time played a huge part. But at the same time, a lot of people are afraid to ask questions, and that's the best thing you can do. Your attitude when you start should be to be a sponge: absorb as much information as possible from day one so you can add value as quickly as possible. And not just on your own desk. Sit with different departments: finance, accounting, treasury, risk. Sit with the front office outside of what they're asking you to do day-to-day and ask how deals are structured. Make sure you understand the derivative side as well as the physical side, because the best traders understand not just trading but every single part of the business. Find a mentor who can walk you through things step by step. Going beyond your job description to find things that add value gets you noticed.",
          "Asking 'why' questions is really important, not just how or what. Why are we doing it this way? Normally there is a P&L-based answer to every question. Why are we choosing this vessel date over that one? Why are we pricing this commodity early in the month rather than late? Those questions take your knowledge to the next level and can be applied to your next shipment. Put all of that together and, when an opportunity comes up, you're going to be looked at favourably.",
          "That said, I was very lucky to move up as quickly as I did, and I wouldn't advise going straight from operations to trading. I was lucky enough to sit on the hedge desk for a year before I started physical trading, and being exposed to risk itself put me ahead of people who had done operations for three years and then started trading, because I understood the nuances of the exchanges we traded on and could structure my physical deals to add more value.",
        ],
      },
      {
        question:
          "What's the biggest mistake you made when you first came into the front office? Did you ever make a deal that lost money, and how did you learn from it?",
        answer: [
          "There isn't a trader in existence who hasn't made trades that lost money; if you interviewed 100 traders and one said they'd never lost money on a trade, they would not be telling the truth. Being a physical trader is much more about navigating changes to deals, things not going 100% perfectly, than making a trade and assuming everything will go great. Watching how things change isn't just proper contract management; it's also where the opportunities for profit are, just as much as the opportunities to avoid losses.",
          "I wrote about one example in the book, from fairly early in my career. We had purchased containers of lead from a company that had sold the same shipment to two different companies and created duplicate bills of lading, using them to obtain double financing in the hope that, by the time anyone realised, they could produce enough lead to cover their tracks. Part of the lesson was becoming far more diligent about document checking and processing. People might view that as a boring part of the industry, but it's one of the most vital, because we still operate in a world where tens or hundreds of millions of dollars of commodities transact against a title document that is three pieces of paper: an original bill of lading. The attention to detail and the security around documentation in physical trading is paramount.",
          "It taught me, luckily early on and on a relatively small shipment, how quickly things can go wrong, and how one failure in the chain creates knock-on impacts that can very quickly create losses. The same goes for counterparty KYC, credit checks and all the supplemental decisions made over and above the outright terms. Most people think of physical trading as buying at this price, at this premium, in this location, and that's it. But there is so much structure underneath that trade; without those boundaries and guardrails, trading would not be able to happen, or it would create so much risk that it would be an entirely different environment.",
        ],
      },
      {
        question:
          "At university, the vast majority of people look at consulting, M&A, banking and law, so physical commodity trading already seems niche. Then you look closer and realise there are around 100 different commodities to trade, usually grouped into metals, ags and energy. You went into metals. How would you tell a recent graduate to navigate entry into commodities? Should they pick a particular commodity, or take a broad approach?",
        answer: [
          "I always say to graduates and new entrants that you should be entirely commodity agnostic when it comes to getting your foot in the door. Most of the skills you learn at the start are highly transferable. Of course there are nuances to each group, ags, energy, metals, hards, softs, but it's very hard to get pigeonholed at the very start of your career, and it's an extremely tough industry to break into. Historically, someone with a finance degree would go into banking, into that traditional environment. Fortunately, commodities have stepped into the spotlight over the last decade or so, and that has encouraged a lot of that talent into the sector. Unfortunately for that talent, it has also created a lot of competition.",
          "Does it help to be passionate about the commodity? Yes. And it can be difficult if you had your heart set on energy and the opportunity comes in metals. But there are plenty of opportunities to move to something that interests you more once you've built a background in physical trading, and it's very hard to know what you'll be passionate about until you've actually done it. I know people who thought they wanted energy or metals, got a job in a different field, ended up loving it and had an entire career in that commodity. In an industry that is increasingly hard to break into, the more you narrow the field, the tougher it gets. So be commodity agnostic at the start of your career.",
        ],
      },
    ],
  },
  {
    heading: "Trafigura and Perfectly Hedged",
    items: [
      {
        question:
          "A lot has happened in the markets since you left Trafigura, from COVID to today's geopolitics. Do you ever regret leaving and missing that window of volatility?",
        answer: [
          "Trafigura was an amazing place to launch a career. I spent the best part of 11 years there and picked up a vast amount of knowledge that I don't think I could have picked up at most other places. When I joined, it was a much younger company; I think I was the 1,300th employee overall since it was founded. As a company grows, the environment changes, and for better or for worse it was a different company after 11 years than the one I joined.",
          "Do I regret leaving? No. Maybe once a year, when they announce their share price increase. Having traded physical for 11 years, I'd always wanted to actively trade derivatives as well, and at that point Trafigura ran all of its derivatives trading out of Geneva. I wasn't in a position to move my family to Europe, so I was happy to take the opportunity to move to a smaller trader and build a derivatives desk from the ground up: not only providing a hedging function for the physical desks, but trading those same derivatives on a speculative, proprietary basis. I wouldn't be in the position I'm in today, having founded a company and working one-to-one with commodity companies across the globe, if I hadn't broadened my own trading acumen, and I certainly wouldn't have been able to write the books I did and launch Perfectly Hedged.",
        ],
      },
      {
        question:
          "Speaking of Perfectly Hedged, can you explain what it is and what you do?",
        answer: [
          "I founded Perfectly Hedged in November 2023, after writing that first book and realising the gap in the market around risk management and hedging was a lot larger than I'd originally thought. One aspect of working at a company like Trafigura is that your counterparts are the best of the best, companies with a very sophisticated understanding of risk. Moving to a smaller, niche trader for the four years afterwards, I started to see a real lack of knowledge, and a lot of value being lost, at many companies when it came to risk management and, importantly, how the derivatives interplay with the physical trading day-to-day.",
          "My role is to work with companies across the entire commodity supply chain, from producers through to consumers and everything in between: financing banks, traders, brokers. More recently that has been across commodities, not just metals but ags, softs and energy, because you realise pretty quickly that while there is nuance between commodities, the underlying principles of risk management apply across the board.",
          "Everything we do is bespoke. Even two companies trading the exact same product may not be handling things the same way, and nor should they be, so we have to go in and understand how that company works, what it's missing and what can be improved. The engagements vary too: some companies didn't hedge at all and needed a risk desk built from scratch; others are already hedging and want to get more out of what they're doing, whether that's operating procedures, best practices or increasing the knowledge of their staff. This industry has quite a high turnover of employees, and part of that is historically a lack of training; it can be very sink or swim. So part of the job is helping companies retain that talent and drive the return on the investment they're making in each employee. On the consulting and education side it's just me, with three or four people working in the background on marketing, accounts and the systems side.",
        ],
      },
    ],
  },
  {
    heading: "An industry in the spotlight",
    items: [
      {
        question:
          "Over the last decade a lot of traditionally finance-bound talent has flowed into physical commodity trading, and the industry has attracted far more media attention, not least because of the huge profits the major trading houses have been making. Do you see this spotlight as a good thing for what has historically been quite a secretive industry?",
        answer: [
          "Yes, I really do. For one, it has forced the industry to abandon some practices that historically weren't the best; with that spotlight has come a huge discussion around ESG policies, which the big traders now pay far more attention to. It has shone a lot of light on an industry that was historically opaque, helped by some large IPOs from some of the biggest traders, which are now public facing. A lot of profit has been made, particularly through COVID and the various geopolitical environments of the last decade, and overall, while it is still competitive, the opportunities are now bigger for new entrants.",
          "And I don't think it's going away. With the energy transition, governments are taking a much more public step to secure critical minerals; you have central governments creating quasi-funds, essentially, to guarantee future production. We've arguably moved into an era of protectionism rather than open trade, and part of physical commodity trading is navigating that changing environment and positioning yourself to take best advantage of it.",
          "The majority of physical trading companies are also still privately owned, which allows them to be flexible: to make decisions quickly, including decisions that at a bank might have been deemed not in shareholders' immediate interests, or too risky. Even in the public eye, they have retained that ability to act nimbly and adjust positioning, while being far more open and transparent about their day-to-day activities.",
        ],
      },
      {
        question:
          "Having worked in physical, then paper, and now third-party consulting, you've gained exposure to all the different players in the industry. How do you expect it to evolve over the next ten years?",
        answer: [
          "One thing we've certainly seen over the last two to three years is real diversification within the larger players. The three biggest independent energy traders in the world, Mercuria, Vitol and Gunvor, have all created metals desks over that period. The volatility we've seen, whether from the markets themselves or from geopolitics, has shown there is a lot of opportunity, but also a lot of risk, in being very singular in what you trade. As economies evolve and we enter the green energy transition, whether that happens over the next five to ten years or the next ten to thirty, it will become much more important to diversify your physical trading to be positioned for whichever commodity is driving that day's conversation.",
          "Agricultural products, I think, aren't seen or understood by the public as much as oil. Most people understand that the price of oil per barrel translates to the petrol price at the pump, but there is just as much influence on food prices coming from the agricultural exchanges. We saw that with Russia's invasion of Ukraine, when one of the biggest grain markets in the world was disrupted, with a huge impact on animal feed and eventually food products, and the price of coffee and chocolate has been hugely volatile because of the coffee and cocoa exchanges. As commodities become more mainstream, the general public will take a much keener view of them, as they do with equities.",
          "Companies are also becoming far more involved in the logistical supply chain, owning vessels and investing in port infrastructure, because during COVID, and just recently with the Strait of Hormuz, we've seen how drastically shipping and logistics can impact profits and pricing. I think that will become an ever-increasing part of their overall books. Finally, I think we'll see a more asset-driven trading environment. The world is a lot smaller now, and producers are in contact with far more end consumers than they used to be. To create volume in the market, whether through offtake agreements, pre-financing or outright ownership of assets, traders will increasingly look to guarantee supply: it gives them volume to trade globally in a more secure way than simply inserting themselves in the middle.",
        ],
      },
      {
        question:
          "You've mentioned that trading is becoming more asset-backed, with long-term offtake agreements and firms like Trafigura buying entire mines. What's your view on these independent trading houses holding such an influential position in world trade?",
        answer: [
          "It's going to be tough to navigate. We saw during the great financial crash how banks created contagion by taking on ever-increasing risks and ended up needing to be bailed out by governments. There is certainly an argument that independent traders, which do not have the financial reporting responsibilities of publicly traded companies, can create very large supply chain risks in commodities the world requires to function. So I do think there will be pressure from governments to understand the flows of independent traders a little more.",
          "At the same time, they create a lot of efficiencies that would not otherwise exist; prices would probably be higher if producers had to deal directly with consumers. So it's a balancing act. You don't want a trader to become too big to fail, but you also don't want so much oversight and regulation that it prevents them from acting nimbly. We already have laws around monopolies that should prevent a single trader from gaining too much control of any one commodity, and that will probably be reviewed as more commodities are deemed critical, to make sure supply or demand isn't too concentrated.",
          "We're also capped in some of these commodities by where they are produced: a defined amount of the world's rare earths comes from China, and 70% of the world's cobalt is produced in the DRC. On the sourcing side you're fairly limited, so controlling who buys that production is tough. When it comes to traders buying assets, though, there's already a decent amount of scrutiny to prevent concentration, and that will probably increase as more minerals are deemed critical by various governments.",
        ],
      },
      {
        question:
          "You mentioned that 70% of the world's cobalt comes from the DRC. How does a huge multinational like Trafigura deal with such unstable and politically sensitive countries?",
        answer: [
          "It's a risk. Any time you're dealing with nations where there is a lack of stability, it's about managing that risk day-to-day and having the processes in place to flag any increase as early as possible, whether that's pricing risk, vessel risk or mine sourcing risk. So many factors can impact whether a deal is successful, and it starts with counterparty risk: how much can we offset by doing background checks and structuring deals in a way that secures supply, but also means we're not on the hook for hundreds of millions of dollars if a deal goes south?",
          "There is risk in every single trade; otherwise there wouldn't be the opportunity to make profits. What matters is how you manage it: the systems, the processes, the people you have in place, and empowering your employees so that if anything looks out of the ordinary, they can raise their hand and say something doesn't seem right. That's something I'd say to every grad as well. When you're starting out, if something doesn't feel right, follow that gut instinct. No one is ever going to get in trouble for saying we should double-check this payment because it doesn't fit what I learned was supposed to happen.",
          "So it's about putting all of that together and mitigating as much risk as possible, while accepting that when you're dealing with instability, whether at a company or an entire country, there is a danger of something going wrong. How you set yourself up, first to catch it as early as possible, and then to handle it when something does veer off course, determines whether it becomes a manageable issue or a catastrophic one.",
        ],
      },
    ],
  },
];

export const recommendations = [
  {
    title: "The Physical Trade and Perfectly Hedged",
    author: "Samuel Basi",
    note: "Basi suggests reading them in that order; the examples in Perfectly Hedged are metals specific, but around 70% of it applies to whatever commodity you trade.",
  },
  {
    title: "The World for Sale",
    author: "Javier Blas and Jack Farchy",
    note: "Story-based background on commodity trading rather than a day-to-day guide.",
  },
  {
    title: "Martijn Bron's podcast",
    author: "Podcast",
    note: "Gets some pretty good guests on and is worth watching.",
  },
  {
    title: "The Human Capital podcast",
    author: "Hosted by Paul Chapman",
    note: "Basi has appeared on the show himself.",
  },
];
