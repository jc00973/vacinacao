package vacinacao.util;

import org.apache.log4j.Logger;

public enum PropEnum {

  CLIENTE, SITE, // (default, caso tenha mais do que um)
  URL, URL_REDE_LOCAL,
  NOME_EMPRESA,
  PATH_DERBYDB,
  PATH_LUCENE,
  STATIC_PATH_ABSOLUTO,
  STATIC_URL
  ;

  public static PropEnum fromString(String s) {

    PropEnum retorno = null;

    for (PropEnum pEnum : values()) {

      if (pEnum.name().equalsIgnoreCase(s) || pEnum.toString().equalsIgnoreCase(s)) {
        retorno = pEnum;
      }

    }

    if (retorno == null) {
      String m = "Prop. \"" + s + "\" nao definido.";
      Logger.getLogger(PropEnum.class).error(m);
    }

    return retorno;
  }

}