Ls – vypise obsah directory
cd Dokumenty/dev – change directory dokumenty dev pracovny priecinok (navigacia medzi priecinkami)
npm run dev – z terminalu spusti kod
ctrl +c vypnutie serveru
npm run build – vytvara app(na spustenie definovaneho build skriptu)
do vsetkych folderov musi ist page.tsx nemoze mat iny nazov
wrapping – nieco zabalit do niecoho ineho(zabalenie)
container-vyrobi responzivitu(ked nemame container tak sa tie vety nehybu)
layout - kam zasekame,posuvame komponenty
https://mui.com/material-ui/react-container/
function – inicializcia objektu

git init
git branch -m main
git config user.name "sudekocatepe"
git config user.email "FikriyeSudeKocatepe@s.zochova.sk"
git remote add origin https://github.com/sudekocatepe/zoska-snap.git
git remote -v
origin  https://github.com/sudekocatepe/zoska-snap.git (fetch)
origin  https://github.com/sudekocatepe/zoska-snap.git (push)
fikriyesudekocatepe@s.zochova.sk@401A-PC09:~/Dokumenty/dev/prvyprojekt$ git add .

git init – inicializacia na locale Git branch -m „name“ – pomenovanie branchu git config –global user.name „name„ – log mena na real ucte git config –global user.email „email„ – log email na real ucte git remote add origin https://github.com/name/repo – do akeho projektu to bude commitovat git remote -v test ci sme spojili local a cloud spravne nainstalovat – gitlens, github pulll request git add . – vklada path/aktualnu zlozku

vypis struktury: #!/bin/bash function list_dir { local dir=$1 local prefix=$2 echo "$prefix|-- $(basename $dir)" for file in "$dir"/*; do if [ -d "$file" ]; then # Exclude node_modules, .next, and .git directories case "$(basename "$file")" in node_modules|.next|.git) continue ;; *) list_dir "$file" "$prefix " ;; esac elif [ -f "$file" ]; then # Display files as well echo "$prefix |-- $(basename "$file")" fi done }

list_dir "." ""

home profil prispevok prihlasenie registracia 