import { useEffect } from "react";
import camisetas from "../Storage/Camisetas";
import camisetasFemininas from "../Storage/CamisetasFemininas";
import tenis from "../Storage/Tenis";
import tenisFeminino from "../Storage/TenisFeminino";
import acessorios from "../Storage/Acessorios";
import { useRouter } from "next/dist/client/router";

export default function Item() {
  const router = useRouter();

  var statusItem;

  function funcStatusItem() {
    if (router.query.status == "camisa") {
      return (statusItem = camisetas);
    } else if (router.query.status == "tenis") {
      return (statusItem = tenis);
    } else if (router.query.status == "camisaFeminina") {
      return (statusItem = camisetasFemininas);
    } else if (router.query.status == "tenisFeminino") {
      return (statusItem = tenisFeminino);
    } else {
      return (statusItem = acessorios);
    }
  }

  funcStatusItem();

  function funcItemFoto(g) {
    return g.filter((o) => {
      if (router.query.statusproduto == o.label) {
        return true;
      } else {
        return false;
      }
    });
  }

  useEffect(() => {
    window.addEventListener("load", funcItemFoto(statusItem));
  }, []);

  var itemFoto = funcItemFoto(statusItem);

  return (
    <section className="corpoMain">
      <div className="fotoPreco">
        <div className="fotoProduto" id="divZoomImg">
          {itemFoto[0] && (
            <img
              id="imgZoom"
              key="ali"
              onMouseEnter={() => {
                {
                  let box = document.getElementById("divZoomImg");
                  let imgem = document.getElementById("imgZoom");

                  box.addEventListener("mousemove", (e) => {
                    let x = e.clientX - e.target.offsetLeft;
                    let y = e.clientY - e.target.offsetTop;

                    imgem.style.transformOrigin = `${x}px ${y}px`;
                    imgem.style.transform = "scale(2)";
                  });

                  box.addEventListener("mouseleave", () => {
                    imgem.style.transformOrigin = "center center";
                    imgem.style.transform = "scale(1)";
                  });
                }
              }}
              src={itemFoto[0].foto}
            />
          )}
        </div>
        <div className="precoProduto"> </div>
      </div>
    </section>
  );
}

//   "/img/camisas/camisaPreta1.jpeg"
