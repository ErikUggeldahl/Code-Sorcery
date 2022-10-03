type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => (
  <main className="content container is-medium">{children}</main>
);
