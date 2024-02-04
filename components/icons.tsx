type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="26"
      fill="none"
    >
      <circle cx="13" cy="13" r="13" fill="hsl(var(--primary))" />
      <path
        fill="hsl(var(--background))"
        d="M8.96 11.656V8.728l6.32-1.168V19h-3.36v-8l-2.96.656Z"
      />
      <path
        fill="hsl(var(--foreground))"
        d="M29.32 3.28h4.152V22H29.32V3.28Zm6.485 3.672c0-.64.224-1.16.672-1.56.464-.4 1.016-.6 1.656-.6.656 0 1.208.2 1.656.6.464.4.696.92.696 1.56 0 .624-.232 1.136-.696 1.536-.448.4-1 .6-1.656.6-.64 0-1.192-.2-1.656-.6-.448-.4-.672-.912-.672-1.536Zm.336 4.008h3.984V22h-3.984V10.96Zm13.878 4.32c0-.576-.096-1.016-.288-1.32-.192-.32-.56-.48-1.104-.48-.32 0-.608.064-.864.192-.24.128-.432.328-.576.6-.128.272-.192.608-.192 1.008V22h-4.152V10.96h4.152v1.632a3.493 3.493 0 0 1 1.272-1.368c.56-.352 1.264-.528 2.112-.528 1.44 0 2.464.368 3.072 1.104.608.72.912 1.736.912 3.048V22H50.02v-6.72Zm6.957-12h3.96V22h-3.96V3.28Zm7.944 7.68h4.92l-4.704 4.56L70.32 22h-4.824l-5.28-6.48 4.704-4.56Z"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
