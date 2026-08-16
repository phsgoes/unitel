import type { StoryRevealItem } from '@/components/ui/StoryReveal.astro'

export const storyItems: StoryRevealItem[] = [
  {
    backgroundColor: '#e8e3da',

    image: {
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90',
      alt: 'Montanhas ao amanhecer',
      caption: 'Origin',
    },

    eyebrow: 'Chapter One',

    title: 'Everything begins',

    titleAccent: 'somewhere.',

    accentColor: 'zinc',

    description:
      'Existe sempre um primeiro instante. Uma paisagem, uma ideia, uma decisão aparentemente pequena que eventualmente transforma todo o caminho.',

    secondaryDescription:
      'Neste primeiro momento, queremos desacelerar. Observar o espaço, perceber a luz e permitir que a narrativa encontre seu próprio ritmo.',
  },

  {
    backgroundColor: '#17221d',

    image: {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=90',
      alt: 'Floresta',
      caption: 'Depth',
    },

    eyebrow: 'Chapter Two',

    title: 'Go deeper than',

    titleAccent: 'surface.',

    accentColor: 'emerald',

    description:
      'Quanto mais avançamos, mais detalhes começam a aparecer. Aquilo que parecia simples ganha novas camadas e novas interpretações.',

    secondaryDescription:
      'O movimento da página cria uma transição contínua entre uma ideia e outra, como se cada capítulo estivesse escondido atrás do anterior.',
  },

  {
    backgroundColor: '#111827',

    image: {
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90',
      alt: 'Espaço arquitetônico',
      caption: 'Form',
    },

    eyebrow: 'Chapter Three',

    title: 'Shape creates',

    titleAccent: 'meaning.',

    accentColor: 'blue',

    description:
      'Espaços não são apenas volumes vazios. Eles definem como percebemos distância, proximidade, silêncio e movimento.',

    secondaryDescription:
      'A mesma lógica existe em uma interface. Cada espaço, cada intervalo e cada transição ajuda a construir uma sensação.',
  },

  {
    backgroundColor: '#24151b',

    image: {
      src: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90',
      alt: 'Céu estrelado',
      caption: 'Beyond',
    },

    eyebrow: 'Final Chapter',

    title: 'Keep moving',

    titleAccent: 'forward.',

    accentColor: 'rose',

    description:
      'Toda narrativa precisa de um ponto em que deixa de olhar para trás. O espaço se abre novamente e o movimento continua.',

    secondaryDescription:
      'Depois deste último capítulo, a página deixa de controlar a rolagem e devolve ao usuário o fluxo natural do documento.',
  },

  {
    backgroundColor: '#24151b',

    image: {
      src: 'https://images.unsplash.com/photo-1780552274859-b3a1e6effd50?q=80&w=2070&auto=format&fit=crop',
      alt: 'Iceberg',
      caption: 'Right now',
    },

    eyebrow: 'Epilogue',

    title: 'Just keep',

    titleAccent: 'moving.',

    accentColor: 'slate',

    description:
      'Toda narrativa precisa de um ponto em que deixa de olhar para trás. O espaço se abre novamente e o movimento continua.',

    secondaryDescription:
      'Depois deste último capítulo, a página deixa de controlar a rolagem e devolve ao usuário o fluxo natural do documento.',
  },
]
