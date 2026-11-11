// The horse cards on the homepage. Add a horse: put a photo in
// src/assets/horses/ and add an entry below.
import type { ImageMetadata } from 'astro';
import wyoming from '../assets/horses/wyoming-paulowna.jpg';
import viola from '../assets/horses/vliets-viola.jpg';
import wynoah from '../assets/horses/wynoah-mg.jpg';
import wiviola from '../assets/horses/wiviola.jpg';
import anneRokien from '../assets/site/anne-rokien.jpg';

export interface Horse {
  name: string;
  pedigree: string;
  instagram: string;
  photo: ImageMetadata;
  alt: string;
}

export const horses: Horse[] = [
  {
    name: 'Wyoming Paulowna',
    pedigree: 'Cero Blue TN x Nummero Uno',
    instagram: 'wyoming.paulowna.showjumping',
    photo: wyoming,
    alt: 'Wyoming Paulowna in draf buiten',
  },
  {
    name: 'Vliets Viola',
    pedigree: "O'Toto van de Wimphof x Bordeaux",
    instagram: 'vliets.viola.dressage',
    photo: viola,
    alt: 'Vliets Viola naast haar moeder',
  },
  {
    name: 'Wynoah MG',
    pedigree: 'Tattoo B-TN x Highway TN',
    instagram: 'wynoah.mg.showjumping',
    photo: wynoah,
    alt: 'Wynoah MG in draf in de binnenbak',
  },
  {
    name: 'Wiviola',
    pedigree: 'VDL Sambucci de Muze x Baltic VDL',
    instagram: 'wiviola.showjumping',
    photo: wiviola,
    alt: 'Portret van Wiviola',
  },
  {
    name: 'AR Horses',
    pedigree: 'Anne & Rokien',
    instagram: 'ar.horses',
    photo: anneRokien,
    alt: 'Anne en Rokien te paard op een bospad',
  },
];
