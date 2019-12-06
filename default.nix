
with import <nixpkgs> {};

stdenv.mkDerivation rec {
  name = "sapper-environment";

  buildInputs = [
    pkgs.nodejs-13_x
    pkgs.yarn
  ];
}



