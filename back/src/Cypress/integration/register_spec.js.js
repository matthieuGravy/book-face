// cypress/integration/register_spec.js
describe("Registration", () => {
  it("Registers a new user", () => {
    // Remplacez par les détails de votre utilisateur de test
    const testUser = {
      username: "testuser",
      password: "testpassword",
      email: "test@example.com",
    };

    cy.visit("/register"); // Visitez la page d'enregistrement

    // Remplissez le formulaire d'enregistrement
    cy.get("input[name=username]").type(testUser.username);
    cy.get("input[name=password]").type(testUser.password);
    cy.get("input[name=email]").type(testUser.email);

    // Soumettez le formulaire
    cy.get("form").submit();

    // Vérifiez que l'utilisateur est bien enregistré
    // Par exemple, vous pouvez vérifier que l'utilisateur est redirigé vers la page de profil
    cy.url().should("include", "/profile");
  });
});
