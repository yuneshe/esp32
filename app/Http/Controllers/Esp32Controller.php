<?php
// app/Http/Controllers/Esp32Controller.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class Esp32Controller extends Controller
{
    public function storeData(Request $request)
    {
        // Retrieve data from ESP32
        $motion = $request->input('motion');
        $pump = $request->input('pump');

        // Log the data or store in a database for later display
        Log::info('Motion detected: ' . $motion);
        Log::info('Pump status: ' . $pump);

        // Optionally save to DB (assuming you have a migration and model for this)
        // Esp32Data::create(['motion' => $motion, 'pump' => $pump]);

        return response()->json(['status' => 'Data received successfully']);
    }
}
