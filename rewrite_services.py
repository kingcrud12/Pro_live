with open("src/app/services/page.tsx", "r") as f:
    text = f.read()

text = text.replace(
    '"Découvrez nos 4 expertises clés à Paris : Stratégie de Marque & Communication, Acquisition Tech & SEO / SEA (Agence Marketing), Création de sites Web sur-mesure (Agence de Communication Digitale) et Production Live Événementielle 4K."',
    '"Découvrez nos 5 expertises clés à Paris : Événementiel, Hôtesses, Audiovisuel, Digital et Communication."'
)

part1 = text.split("{/* Communication (Col 1-7) */}")[0]
rest1 = "{/* Communication (Col 1-7) */}" + text.split("{/* Communication (Col 1-7) */}")[1]

comm = rest1.split("{/* Digital (Col 8-12) */}")[0]
rest2 = "{/* Digital (Col 8-12) */}" + rest1.split("{/* Digital (Col 8-12) */}")[1]

digital = rest2.split("{/* Marketing (Col 1-5) */}")[0]
rest3 = "{/* Marketing (Col 1-5) */}" + rest2.split("{/* Marketing (Col 1-5) */}")[1]

marketing = rest3.split("{/* Événementiel (Col 6-12) */}")[0]
rest4 = "{/* Événementiel (Col 6-12) */}" + rest3.split("{/* Événementiel (Col 6-12) */}")[1]

evenementiel = rest4.split("{/* Audiovisuel (Col 1-7) */}")[0]
rest5 = "{/* Audiovisuel (Col 1-7) */}" + rest4.split("{/* Audiovisuel (Col 1-7) */}")[1]

audiovisuel = rest5.split("{/* Hôtesses et hôtes de luxes (Col 1-5 Box / 6-12 Details) */}")[0]
rest6 = "{/* Hôtesses et hôtes de luxes (Col 1-5 Box / 6-12 Details) */}" + rest5.split("{/* Hôtesses et hôtes de luxes (Col 1-5 Box / 6-12 Details) */}")[1]

hotesses = rest6.split("        </div>\n      </section>")[0]
footer = "        </div>\n      </section>" + rest6.split("        </div>\n      </section>")[1]

evenementiel = evenementiel.replace("lg:col-span-7", "lg:col-span-12", 1)
audiovisuel = audiovisuel.replace("05", "03", 1)
hotesses = hotesses.replace("06", "02", 1)
digital = digital.replace("02", "04", 1)
comm = comm.replace("01", "05", 1)

new_text = part1 + evenementiel + hotesses + audiovisuel + digital + comm + footer

with open("src/app/services/page.tsx", "w") as f:
    f.write(new_text)

print("Success")
