**- Def => TS est une superset JS**
**- NB => En TS, la verification de type se fera a la compilation mais pas a l'execution**
**- Pourqoui utiliser TS =>**

# AVANTAGES :

    ```
        => Limites les erreur
        ex: Uncautght TypeError: Cannot read properties of undifined(reading 'yoLowerCase')
        => Meilleur autocompletion et documentation (bien plus poussée que JSDoc)
        => Une cible simple (TS peut convertire en ES3 ou ESNext[Dernier version de ES])
    ```

# INCONVENIENTS :

    ```
        => C'est un outils suplementaire (Il faut convertire ls TS en JS pour le tester)
        => L'ecosysteme JS (Si on utilise un librairie que n'est pas typé, TS va buger car il ne connais pas de qoiu il va retourné)
            - Pour cela, il faut ecrire une fichier de definition pour expiquer a TS a quoui le librairie va retourné
        => On Perd en flexibilité
            - Certains fonctions sont difficil à typer
        => Code moins lisible
    ```

**- Convertion de TS en JS**
=> Typescript(tsc)
=> ESBuild
=> Parcel
=> Vite (Via ESBuild)
=> Webpack(ts-loader)
