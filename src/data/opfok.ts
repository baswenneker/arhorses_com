// The five steps of the rearing process on /opfokproces/.
import type { ImageMetadata } from 'astro';
import selectie from '../assets/opfok/01-selectie.jpg';
import opgroeien from '../assets/opfok/02-opgroeien.jpg';
import inBeeld from '../assets/opfok/03-in-beeld.jpg';
import volgendeStap from '../assets/opfok/04-volgende-stap.jpg';
import nieuweEigenaar from '../assets/opfok/05-nieuwe-eigenaar.jpg';

export interface Step {
  title: string;
  text: string;
  photo: ImageMetadata;
  alt: string;
  /** Tailwind classes for the card background and text colour. */
  tone: string;
}

export const steps: Step[] = [
  {
    title: 'Selectie',
    text: 'Beloftevolle veulens geselecteerd met oog voor kwaliteit, aanleg en toekomst.',
    photo: selectie,
    alt: 'Jong veulen naast de merrie',
    tone: 'bg-bark text-milk',
  },
  {
    title: 'Opgroeien',
    text: 'Tijd en ruimte voor een sterke fysieke, mentale en sociale ontwikkeling.',
    photo: opgroeien,
    alt: 'Twee veulens rennen samen door de wei',
    tone: 'bg-bark text-milk',
  },
  {
    title: 'In beeld',
    text: 'We leggen de ontwikkeling vanaf het eerste moment vast.',
    photo: inBeeld,
    alt: 'Fotograaf in AR Horses-jas fotografeert een paard in de wei',
    tone: 'bg-mist text-ink',
  },
  {
    title: 'Volgende stap',
    text: 'Een sterke basis en klaar voor de volgende stap richting de sport.',
    photo: volgendeStap,
    alt: 'Jong paard staat bij het hek van de wei',
    tone: 'bg-slate text-milk',
  },
  {
    title: 'Nieuwe eigenaar',
    text: 'De juiste match gevonden. De complete historie en ontwikkeling gaat mee naar de nieuwe eigenaar.',
    photo: nieuweEigenaar,
    alt: 'Gezadeld paard met zijn nieuwe eigenaar',
    tone: 'bg-sage text-ink',
  },
];
