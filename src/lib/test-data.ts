
export type QuestionType = "single" | "multiple" | "boolean" | "info";

export interface QuestionOption {
  value: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  subtext?: string;
  sectiontext?: string;
  image?: string;
  imageBgColor?: string;
  audio?: string;
  options?: QuestionOption[];
  correctValues?: string[];
}

export type TestLevel = 'A1' | 'A2';

export const LEVELS: TestLevel[] = ['A1', 'A2'];

export const LEVEL_LABELS: Record<TestLevel, string> = {
  A1: 'A1 (Beginner)',
  A2: 'A2 (Elementary)',
};

export const PASS_THRESHOLDS: Record<TestLevel, number> = {
  A1: 14,
  A2: 12,
};

export const TEST_QUESTIONS: Record<TestLevel, Question[]> = {
  A1: [
    {
      id: 'a1-1',
      type: 'single',
      text: 'Match the picture to the word.',
      image: '/cat.webp',
      subtext: 'Look at the picture below and choose the word that matches it.',
      options: [{ value: 'a', text: 'Gatto' },
      { value: 'b', text: 'Cane' },
      { value: 'c', text: 'Topo' },
      { value: 'd', text: 'Uccello' }],
      correctValues: ['a']
    },
    {
      id: 'a1-2',
      type: 'single',
      text: 'Match the picture to the word.',
      image: '/dog.webp',
      subtext: 'Look at the picture below and choose the word that matches it.',
      options: [{ value: 'a', text: 'Cane' },
      { value: 'b', text: 'Gatto' },
      { value: 'c', text: 'Arachide' },
      { value: 'd', text: 'Serpente' }],
      correctValues: ['a']
    },
    {
      id: 'a1-3',
      type: 'single',
      text: 'Match the picture to the word.',
      image: '/apple.webp',
      subtext: 'Look at the picture below and choose the word that matches it.',
      options: [{ value: 'a', text: 'Mela' },
      { value: 'b', text: 'Pera' },
      { value: 'c', text: 'Fragola' },
      { value: 'd', text: 'Ananas' }],
      correctValues: ['a']
    },
    {
      id: 'a1-4',
      type: 'single',
      text: 'Match the picture to the word.',
      image: '/carrot.webp',
      subtext: 'Look at the picture below and choose the word that matches it.',
      options: [{ value: 'a', text: 'Carota' },
      { value: 'b', text: 'Pesca' },
      { value: 'c', text: 'Mirtillo' },
      { value: 'd', text: 'Cipolla' }],
      correctValues: ['a']
    },
    {
      id: 'a1-5',
      type: 'single',
      text: 'Io ___ studente.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'sono' },
        { value: 'b', text: 'sei' },
        { value: 'c', text: 'è' },
        { value: 'd', text: 'siamo' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-6',
      type: 'single',
      text: 'Vado ___ Milano.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'a' },
        { value: 'b', text: 'in' },
        { value: 'c', text: 'su' },
        { value: 'd', text: 'di' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-7',
      type: 'single',
      text: 'Questo ___ il mio libro.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'è' },
        { value: 'b', text: 'sono' },
        { value: 'c', text: 'sei' },
        { value: 'd', text: 'ha' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-8',
      type: 'single',
      text: 'Ho ___ pomodoro.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'un' },
        { value: 'b', text: 'una' },
        { value: 'c', text: 'la' },
        { value: 'd', text: 'le' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-9',
      type: 'single',
      text: 'Sono ___ cucina.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'in' },
        { value: 'b', text: 'a' },
        { value: 'c', text: 'su' },
        { value: 'd', text: 'per' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-10',
      type: 'single',
      text: 'Lui ___ un dottore.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'è' },
        { value: 'b', text: 'sono' },
        { value: 'c', text: 'sei' },
        { value: 'd', text: 'siamo' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-11',
      type: 'single',
      text: 'Di dove ___?',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'sei' },
        { value: 'b', text: 'è' },
        { value: 'c', text: 'sono' },
        { value: 'd', text: 'stai' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-12',
      type: 'single',
      text: '___ un gatto sul divano.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'C’è' },
        { value: 'b', text: 'Ci sono' },
        { value: 'c', text: 'Sono' },
        { value: 'd', text: 'È' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-13',
      type: 'single',
      text: 'Abito ___ Roma.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'a' },
        { value: 'b', text: 'in' },
        { value: 'c', text: 'da' },
        { value: 'd', text: 'per' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-14',
      type: 'single',
      text: 'Sono ___ Lugano.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'di' },
        { value: 'b', text: 'in' },
        { value: 'c', text: 'va' },
        { value: 'd', text: 'vai' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-15',
      type: 'single',
      text: 'Io ___ un fratello.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'ho' },
        { value: 'b', text: 'hai' },
        { value: 'c', text: 'ha' },
        { value: 'd', text: 'hanno' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-16',
      type: 'single',
      text: 'Questa è ___ casa.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'la mia' },
        { value: 'b', text: 'il mio' },
        { value: 'c', text: 'i miei' },
        { value: 'd', text: 'le mie' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-17',
      type: 'single',
      text: '___ un cugino?',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'Hai' },
        { value: 'b', text: 'Va' },
        { value: 'c', text: 'Ha' },
        { value: 'd', text: 'Hanno' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-18',
      type: 'single',
      text: 'Noi ___ in Italia.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'abitiamo' },
        { value: 'b', text: 'abita' },
        { value: 'c', text: 'abiti' },
        { value: 'd', text: 'abitano' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-19',
      type: 'single',
      text: 'Loro ___ in Svizzera.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'abitano' },
        { value: 'b', text: 'abita' },
        { value: 'c', text: 'abitiamo' },
        { value: 'd', text: 'abiti' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a1-20',
      type: 'single',
      text: 'Ho un gatto, il mio vicino ha due ___.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'gatti' },
        { value: 'b', text: 'gatto' },
        { value: 'c', text: 'gatta' },
        { value: 'd', text: 'gati' }
      ],
      correctValues: ['a']
    }
  ],
  A2: [
    {
      id: 'a2-1',
      type: 'single',
      text: 'Tel Aviv è lontana ___ Denver.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'da' },
        { value: 'b', text: 'a' },
        { value: 'c', text: 'in' },
        { value: 'd', text: 'verso' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-2',
      type: 'single',
      text: 'Parlo ___ mio fratello ogni sera.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'con' },
        { value: 'b', text: 'di' },
        { value: 'c', text: 'a' },
        { value: 'd', text: 'su' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-3',
      type: 'single',
      text: 'Domani ___ a Dallas.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'parto' },
        { value: 'b', text: 'partito' },
        { value: 'c', text: 'partivo' },
        { value: 'd', text: 'parta' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-4',
      type: 'single',
      text: 'Il film è interessante, ___ è breve.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'ma' },
        { value: 'b', text: 'e' },
        { value: 'c', text: 'perché' },
        { value: 'd', text: 'o' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-5',
      type: 'single',
      text: 'Questo è il mio amico, ___ studia medicina.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'che' },
        { value: 'b', text: 'ma' },
        { value: 'c', text: 'o' },
        { value: 'd', text: 'e' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-6',
      type: 'single',
      text: 'Dammi ___ libro, per favore.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'questo' },
        { value: 'b', text: 'a' },
        { value: 'c', text: 'quella' },
        { value: 'd', text: 'questi' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-7',
      type: 'single',
      text: 'Domani andiamo ___ mare.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'al' },
        { value: 'b', text: 'in' },
        { value: 'c', text: 'da' },
        { value: 'd', text: 'su' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-8',
      type: 'single',
      text: 'Il mio nipote ___ in banca.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'lavora' },
        { value: 'b', text: 'lavori' },
        { value: 'c', text: 'lavorano' },
        { value: 'd', text: 'lavoriamo' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-9',
      type: 'single',
      text: 'Abbiamo ordinato la pizza ___ avevamo fame.',
      subtext: 'Choose the correct connector to show a reason.',
      options: [
        { value: 'a', text: 'perché' },
        { value: 'b', text: 'ma' },
        { value: 'c', text: 'oppure' },
        { value: 'd', text: 'anche' },
      ],
      correctValues: ['a'],
    },
    {
      id: 'a2-10',
      type: 'single',
      text: '___ la torta nel forno per 30 minuti.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'Cuoci' },
        { value: 'b', text: 'Bolli' },
        { value: 'c', text: 'Taglia' },
        { value: 'd', text: 'Mescola' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-11',
      type: 'single',
      text: 'Il volo da Buenos Aires a Miami ___ circa 9 ore e 20 minuti.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'dura' },
        { value: 'b', text: 'fa' },
        { value: 'c', text: 'porta' },
        { value: 'd', text: 'corre' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-12',
      type: 'single',
      text: 'Mi ___ il gelato.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'piace' },
        { value: 'b', text: 'piaci' },
        { value: 'c', text: 'piacete' },
        { value: 'd', text: 'piacciono' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-13',
      type: 'single',
      text: '___ la finestra, per favore.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'Apri' },
        { value: 'b', text: 'Aprono' },
        { value: 'c', text: 'Aprire' },
        { value: 'd', text: 'Apriva' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-14',
      type: 'single',
      text: 'Vivo qui ___ dieci anni.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'da' },
        { value: 'b', text: 'per' },
        { value: 'c', text: 'in' },
        { value: 'd', text: 'su' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-15',
      type: 'single',
      text: 'Non è rimasto ___ carburante.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'molto' },
        { value: 'b', text: 'alcuni' },
        { value: 'c', text: 'molti' },
        { value: 'd', text: 'troppi' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-16',
      type: 'single',
      text: 'Le Montagne Rocciose mi ___ delle Alpi svizzere.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'ricordano' },
        { value: 'b', text: 'attirano' },
        { value: 'c', text: 'seguono' },
        { value: 'd', text: 'superano' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-17',
      type: 'single',
      text: 'Sua sorella maggiore è ___ di lui.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'più alta' },
        { value: 'b', text: 'più alto' },
        { value: 'c', text: 'alta di' },
        { value: 'd', text: 'più altissima' },
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-18',
      type: 'single',
      text: 'L’estate scorsa lui ___ a Lugano.',
      subtext: 'Pick the correct option for a completed action in the past.',
      options: [
        { value: 'a', text: 'è andato' },
        { value: 'b', text: 'ha andato' },
        { value: 'c', text: 'andava' },
        { value: 'd', text: 'va' },
      ],
      correctValues: ['a']
    }
  ]
};
