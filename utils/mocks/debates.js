const debatesMock = [
  {
    id: 1,
    title: 'GLENVIEW PHARMA INC.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'China',
    viewpoints: [{}, {}, {}, {}, {}],
    image: ''
  },
  {
    id: 2,
    title: 'Preferred Pharmaceuticals, Inc',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    public: false,
    categories: ['science', 'sport'],
    minchar: 20,
    maxchar: 3000,
    community: 'Tajikistan',
    viewpoints: null,
    image: ''
  },
  {
    id: 3,
    title: 'Torrent Pharmaceuticals Limited',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    public: true,
    categories: ['science'],
    minchar: 5,
    maxchar: 80,
    community: 'China',
    viewpoints: null,
    image: ''
  },
  {
    id: 4,
    title: 'BrandStorm HBC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    public: false,
    categories: ['politic'],
    minchar: 25,
    maxchar: 340,
    community: 'Venezuela',
    viewpoints: null,
    image: ''
  },
  {
    id: 5,
    title: 'The Mentholatum Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Israel',
    viewpoints: [{}, {}, {}],
    image: ''
  },
  {
    id: 6,
    title: 'Wal-Mart Stores Inc.',
    description: 'Double internal mammary-coronary artery bypass',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Brazil',
    viewpoints: [{}, {}],
    image: ''
  },
  {
    id: 7,
    title: 'Apotheca, Inc.',
    description: 'Other fetal monitoring',
    public: true,
    categories: ['sport'],
    minchar: 2,
    maxchar: 300,
    community: 'China',
    viewpoints: null,
    image: ''
  },
  {
    id: 8,
    title: 'Nelco Laboratories, Inc.',
    description: 'Incision of cervix to assist delivery',
    public: false,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'New Zealand',
    viewpoints: null,
    image: ''
  },
  {
    id: 9,
    title: 'AAA Pharmaceutical, Inc.',
    description: 'Laparoscopy',
    public: false,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Cyprus',
    viewpoints: null,
    image: ''
  },
  {
    id: 10,
    title: 'Nelco Laboratories, Inc.',
    description: 'Repair of cystocele and rectocele',
    public: true,
    categories: ['science', 'politic'],
    minchar: 100,
    maxchar: 3000,
    community: 'Canada',
    viewpoints: [{}, {}, {}, {}],
    image: ''
  },
  {
    id: 11,
    title: 'Kroger Company',
    description: 'Other and unspecified repair of the anulus fibrosus',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'China',
    viewpoints: null,
    image: ''
  },
  {
    id: 12,
    title: 'LG Household and Healthcare, Inc.',
    description: 'Temporomandibular arthroplasty',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'China',
    viewpoints: [{}],
    image: ''
  },
  {
    id: 13,
    title: 'EMINENCE BIOTECH CORPORATION LIMITED',
    description: 'Cystoscopy through artificial stoma',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Sweden',
    viewpoints: [{}, {}],
    image: ''
  },
  {
    id: 14,
    title: 'Sun Pharma Global FZE',
    description: 'Replacement of vaginal or vulvar packing or drain',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Croatia',
    viewpoints: null,
    image: ''
  },
  {
    id: 15,
    title: 'A-S Medication Solutions LLC',
    description: 'Other operations on skull, brain, and cerebral meninges',
    public: false,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'France',
    viewpoints: null,
    image: ''
  },
  {
    id: 16,
    title: 'St Marys Medical Park Pharmacy',
    description: 'Release of tarsal tunnel',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Russia',
    viewpoints: [{}],
    image: ''
  },
  {
    id: 17,
    title: 'ABLE C&C CO., LTD.',
    description:
      'Partial excision of pituitary gland, transsphenoidal approach',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Czech Republic',
    viewpoints: [{}, {}, {}, {}, {}],
    image: ''
  },
  {
    id: 18,
    title: 'Best Choice (Valu Merchandisers Company)',
    description: 'Percutaneous aspiration of kidney (pelvis)',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Sierra Leone',
    viewpoints: [{}],
    image: ''
  },
  {
    id: 19,
    title: 'Avon Products, Inc.',
    description: 'Circumcision',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Macedonia',
    viewpoints: [{}],
    image: ''
  },
  {
    id: 20,
    title: "L'Oreal USA Products Inc",
    description: 'Local excision or destruction of lesion or tissue of trachea',
    public: true,
    categories: ['science', 'politic'],
    minchar: 2,
    maxchar: 300,
    community: 'Republic of the Congo',
    viewpoints: [{}, {}, {}],
    image: ''
  }
];

module.exports = {
  debatesMock
};
