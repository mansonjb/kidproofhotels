import Script from "next/script";

// Stay22 "LetMeAllez" (LMA) script: automatically rewrites outbound booking
// links into Stay22 affiliate links. Placed once, globally. Deferred
// (afterInteractive) so it never weighs on the LCP. The id is public.
export function Stay22Script({ lmaId }: { lmaId?: string }) {
  if (!lmaId) return null;
  return (
    <Script id="stay22-letmeallez" strategy="afterInteractive">
      {`(function (s, t, a, y) {
  s.Stay22 = s.Stay22 || {};
  s.Stay22.params = { lmaID: '${lmaId}' };
  var el = t.createElement(a), first = t.getElementsByTagName(a)[0];
  el.async = 1; el.src = y; first.parentNode.insertBefore(el, first);
})(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');`}
    </Script>
  );
}
