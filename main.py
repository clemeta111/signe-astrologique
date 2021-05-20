def on_button_pressed_a():
    global chiffre_du_jour
    chiffre_du_jour += chiffre_du_jour - 1
    basic.show_number(chiffre_du_jour)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global chiffre_du_jour
    chiffre_du_jour += chiffre_du_jour + 1
    basic.show_number(chiffre_du_jour)
input.on_button_pressed(Button.B, on_button_pressed_b)

chiffre_du_jour = 0
chiffre_du_jour = 1