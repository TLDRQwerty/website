import Link from '@components/Link'
interface Props {};

export default function Header({}: Props) {
  return (
    <header className="flex flex-row justify-between font-bold m-2">
      <div>
        <Link href="/" label="Charlie Carolan" />
      </div>
      <div className="space-x-4">
        <Link href="https://github.com/tldrqwerty" label="Github" />
        <Link href="./blog" label="Blog" />
      </div>
    </header>
  );
}
