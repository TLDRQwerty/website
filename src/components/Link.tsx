interface Props {
  href: string;
  label: string;
}

export default function Link({ href, label }: Props) {
  return (
    <a
      className="hover:dark:text-primary-500 hover:text-primary-800 hover:dark:bg-white/5 hover:bg-gray-800/5 rounded-xl p-2 transition-all"
      href={href}
    >
      {label}
    </a>
  );
}
