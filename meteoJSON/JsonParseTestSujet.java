package meteoJSON;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class JsonParseTestSujet {

	public static void main(String[] args) throws JSONException, IOException {
		
		JSONObject jsonObject=null;
		
		try {

			/*String bastia = readFile(args[0], StandardCharsets.UTF_8);
			jsonObject = new JSONObject(bastia);

			System.out.println("Affiche JSONObject avec toSring");   
			System.out.println(jsonObject.toString());   
			System.out.println("Dans l'objet il y a " +jsonObject.length()+" clefs");
			
			String nomEquipe=jsonObject.getJSONObject("equipe").getString("nom");
			System.out.println("Le nom de l'équipe est "+nomEquipe);
			
			int nbJoueur=jsonObject.getJSONObject("equipe").getJSONArray("joueurs").length();
			System.out.println("Il y a "+nbJoueur+" joueurs");
			
			String nomJoueur=null;
			System.out.println("Les noms de joueurs sont:");
			for(int i=0;i<nbJoueur;i++) {
				nomJoueur=jsonObject.getJSONObject("equipe").getJSONArray("joueurs").getJSONObject(i).getString("nom");
				System.out.println(nomJoueur);
			}
			
			int ageTotal=0;
			for(int i=0;i<nbJoueur;i++) {
				ageTotal+=jsonObject.getJSONObject("equipe").getJSONArray("joueurs").getJSONObject(i).getInt("age");
			}
			double ageMoyen=ageTotal/nbJoueur;
			System.out.println("L'âge moyen est de "+ageMoyen+" ans");*/
			
			
			/*Traitement de l'audio JSON*/
			String test = readFile(args[1], StandardCharsets.UTF_8);
			jsonObject = new JSONObject(test);
			
			int nbMots=jsonObject.getJSONArray("actions").getJSONObject(0).getJSONObject("result").getJSONArray("items").length();
			System.out.println("Il y a "+nbMots+" mots");
			
			String subtitle="Sous-titre:";
			for(int i=0;i<nbMots;i++) {
				String text=jsonObject.getJSONArray("actions").getJSONObject(0).getJSONObject("result").getJSONArray("items").getJSONObject(i).getString("text");
				subtitle+=" "+text;
			}
			System.out.println(subtitle);
			
			
		} catch (FileNotFoundException ex) {
			ex.printStackTrace();
		} catch (IOException ex) {
			ex.printStackTrace();
		} catch (NullPointerException ex) {
			ex.printStackTrace();
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		//System.out.println("Le nom de l'équipe est "+getNomEquipe(jsonObject));

		//enregistrement d'une nouvelle recette
		InputStreamReader r=new InputStreamReader(System.in);  
		BufferedReader br=new BufferedReader(r); 

	}

	//--
	static String readFile(String path, Charset encoding) 
			throws IOException 
	{
		byte[] encoded = Files.readAllBytes(Paths.get(path));
		return new String(encoded, encoding);
	}
	//--
	
	/*static String getNomEquipe(JSONObject j) throws JSONException{
		String nomEquipe=null;
		try {
			nomEquipe = j.getJSONObject("equipe").getString("nom");
			
		}catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return nomEquipe;
	}*/

}