function lerp(a, b, t) {
  // Linear interpolation between a and b
  // t is a value between 0 and 1 a porcentage
  return a + (b - a) * t;
}

function getIntersection(A, B, C, D) {
  // Get the intersection point between two segments
  /*
  Ix = Ax + t(Bx - Ax)
  Iy = Ay + t(By - Ay)

  Ix = Cx + u(Dx - Cx)
  Iy = Cy + u(Dy - Cy)

  Ix = Ax + t(Bx - Ax) = Cx + u(Dx - Cx)
  Iy = Ay + t(By - Ay) = Cy + u(Dy - Cy)

  Ax + t(Bx - Ax) - Cx = Cx + u(Dx - Cx) - Cx
  (Ax - Cx) + t(Bx - Ax) = u(Dx - Cx) // Eq-01

  Ay + t(By - Ay) - Cy = Cy + u(Dy - Cy) - Cy
  (Ay - Cy) + t(By - Ay) = u(Dy - Cy)

  [(Ay - Cy) + t(By - Ay)](Dx - Cx) = u(Dy - Cy)(Dx - Cx)
  (Dx - Cx)(Ay - Cy) + t(Dx - Cx)(By - Ay) = u(Dy - Cy)(Dx - Cx) // Eq-02

  Reemplace Eq-01 in Eq-02
  (Dx - Cx)(Ay - Cy) + t(Dx - Cx)(By - Ay) = [(Ax - Cx) + t(Bx - Ax)](Dy - Cy)
  (Dx - Cx)(Ay - Cy) + t(Dx - Cx)(By - Ay) = (Dy - Cy)(Ax - Cx) + t(Dy - Cy)(Bx - Ax)

  (Dx - Cx)(Ay - Cy) + t(Dx - Cx)(By - Ay) - (Dy-Cy)(Ax-Cx) = (Dy - Cy)(Ax - Cx) + t(Dy - Cy)(Bx - Ax) - (Dy-Cy)(Ax-Cx)
  (Dx - Cx)(Ay - Cy) + t(Dx - Cx)(By - Ay) - (Dy-Cy)(Ax-Cx) - t(Dx - Cx)(By - Ay) = t(Dy - Cy)(Bx - Ax) - t(Dx - Cx)(By - Ay)
  (Dx - Cx)(Ay - Cy) - (Dy-Cy)(Ax-Cx) = t(Dy - Cy)(Bx - Ax) - t(Dx - Cx)(By - Ay)
  [(Dx - Cx)(Ay - Cy) - (Dy-Cy)(Ax-Cx)] / [(Dy - Cy)(Bx - Ax) - (Dx - Cx)(By - Ay)] = t

  top = (Dx - Cx)(Ay - Cy) - (Dy-Cy)(Ax-Cx)
  bottom = (Dy - Cy)(Bx - Ax) - (Dx - Cx)(By - Ay)
  t = top / bottom

  */

  const top = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
  const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);
  const t = top / bottom;
  return {
    x: lerp(A.x, B.x, t),
    y: lerp(A.y, B.y, t),
  };
}
