type PageFrameProps = {
  title: string;
};

export function PageFrame({ title }: PageFrameProps) {
  return (
    <section className="page-frame" aria-labelledby="page-title">
      <div className="eyebrow">Platform Section</div>
      <h1 id="page-title">{title}</h1>
      <p>Content for this section will be introduced in a future update.</p>
    </section>
  );
}
