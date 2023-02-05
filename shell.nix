{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs.nodePackages; [ pkgs.nodejs npm sass ];
}
