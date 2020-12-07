/* 
This app is being designed around the user experience of interacting with the website. This file holds test data for pages using Lists.
It should be modified only in line with rethinking what data is held or how we hold it. Once the backend is started, this should be deleted.
*/

export const data = {
  music: [
    {
      id: 0,
      name: 'Sheet Music for Viola',
      usedFor: `I'm always looking for fun new music to play. It keeps me interested and practicing!`,
      specifications: [
        'Difficulty should be rated Grade 3 or lower',
        'Fiddle and film music is especially fun'
      ],
      examples: [
        'Lord of the Rings released by Hal Leonard',
        'Scottish Fiddling for Viola by Anne de Witt'
      ]
    },
    {
      id: 1,
      name: 'Technical Skills books',
      usedFor: `I use these to learn how to play better. They include exercises and detailed explanations that help improve my playing technique. This allows me to play a wider variety of music and sound better overall!`,
      specifications: [
        'I can use technique books for violin, viola, cello, and piano',
        'Violin: Grade 3',
        'Viola: Grade 2',
        'Piano: Grade 1',
        'Cello: Grade 6 and higher'
      ],
      examples: ['Scales by Simon Fischer']
    },
    {
      id: 2,
      name: 'Strings for Violin',
      usedFor: `The strings you use drastically affect the sound of your instrument. I haven't found a set I truly love for my violin and would like to experiment with more types!`,
      specifications: [
        'Always get ball-end strings',
        'I need full size strings',
        'Strings that sell for under £30 for a set are probably terrible',
        `I've already tried Corelli New Crystal strings`
      ],
      examples: ['Warchal Amber', 'Pirastro Chorda']
    }
  ],
  sewing: [
    {
      id: 3,
      name: 'Tracing Paper',
      usedFor:
        'I use tracing paper to alter existing sewing patterns as well as to make my own',
      specifications: [
        'I need the paper to be in a roll, not individual sheets',
        'It should be at least 760mm wide'
      ],
      examples: []
    }
  ],
  baking: []
};
