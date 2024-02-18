import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  X,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

type SocialsListProps = {};

const SocialsList = (props: SocialsListProps) => {
  return (
    <ul className="flex gap-3 items-center justify-center">
      <Link href={'/'} target="_blank">
        <li className="rounded-full border p-2">
          <Twitter className="w-5 h-5" />
        </li>
      </Link>
      <Link href={'/'} target="_blank">
        <li className="rounded-full border p-2">
          <Youtube className="w-5 h-5" />
        </li>
      </Link>
      <Link href={'/'} target="_blank">
        <li className="rounded-full border p-2">
          <Facebook className="w-5 h-5" />
        </li>
      </Link>
      <Link href={'/'} target="_blank">
        <li className="rounded-full border p-2">
          <Linkedin className="w-5 h-5" />
        </li>
      </Link>
      <Link href={'/'} target="_blank">
        <li className="rounded-full border p-2">
          <Twitch className="w-5 h-5" />
        </li>
      </Link>
      <Link href={'/'} target="_blank">
        <li className="rounded-full border p-2">
          <Github className="w-5 h-5" />
        </li>
      </Link>
      <Link href={'/'} target="_blank">
        <li className="rounded-full border p-2">
          <Instagram className="w-5 h-5" />
        </li>
      </Link>
    </ul>
  );
};

export default SocialsList;
