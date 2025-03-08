import { Microscope, Target, Scale, ExternalLink } from "lucide-react"
import Link from "next/link"

export function SarcomaSpecificSection() {
  return (
    <div className="space-y-8">
      <div id="sarcoma-staging" className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 shadow-md border border-amber-200">
        <div className="flex items-center mb-4">
          <div className="bg-amber-500 p-2 rounded-full mr-4">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-800">Sarcoma Staging</h3>
            <p className="text-amber-600">How soft tissue sarcomas are staged</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Soft tissue sarcomas, including Leiomyosarcoma (LMS), use the American Joint Committee on Cancer (AJCC) TNM staging system, which considers:
        </p>
        
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          <div className="p-4 rounded-lg bg-white/70 border border-amber-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-2">
              <div className="bg-amber-100 p-1 rounded-full mr-2">
                <span className="font-bold text-amber-600 text-sm">T</span>
              </div>
              <h5 className="font-semibold text-amber-800">Tumor Size</h5>
            </div>
            <p className="text-sm text-gray-700">
              Measures the size of the primary tumor and whether it has grown into nearby structures
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-white/70 border border-amber-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-2">
              <div className="bg-amber-100 p-1 rounded-full mr-2">
                <span className="font-bold text-amber-600 text-sm">N</span>
              </div>
              <h5 className="font-semibold text-amber-800">Lymph Node Involvement</h5>
            </div>
            <p className="text-sm text-gray-700">
              Indicates whether the cancer has spread to nearby lymph nodes (uncommon in most sarcomas)
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-white/70 border border-amber-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-2">
              <div className="bg-amber-100 p-1 rounded-full mr-2">
                <span className="font-bold text-amber-600 text-sm">M</span>
              </div>
              <h5 className="font-semibold text-amber-800">Metastasis</h5>
            </div>
            <p className="text-sm text-gray-700">
              Indicates whether the cancer has spread to distant parts of the body (most commonly the lungs)
            </p>
          </div>
        </div>
        
        <div className="bg-white/70 rounded-lg p-5 border border-amber-100 mb-6">
          <h4 className="font-semibold text-amber-800 mb-3">Sarcoma Stage Groupings</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-amber-50">
                  <th className="py-2 px-3 text-left text-amber-800 font-medium border border-amber-100">Stage</th>
                  <th className="py-2 px-3 text-left text-amber-800 font-medium border border-amber-100">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="py-2 px-3 border border-amber-100 font-medium">Stage IA</td>
                  <td className="py-2 px-3 border border-amber-100">
                    Small tumor (≤5 cm), superficial, low grade (G1), no spread to lymph nodes or distant sites
                  </td>
                </tr>
                <tr className="bg-amber-50/30">
                  <td className="py-2 px-3 border border-amber-100 font-medium">Stage IB</td>
                  <td className="py-2 px-3 border border-amber-100">
                    Small tumor (≤5 cm), deep, low grade (G1), no spread to lymph nodes or distant sites
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border border-amber-100 font-medium">Stage II</td>
                  <td className="py-2 px-3 border border-amber-100">
                    Larger tumor ({'>'}5 cm), low grade (G1), no spread to lymph nodes or distant sites
                  </td>
                </tr>
                <tr className="bg-amber-50/30">
                  <td className="py-2 px-3 border border-amber-100 font-medium">Stage IIIA</td>
                  <td className="py-2 px-3 border border-amber-100">
                    Small tumor (≤5 cm), high grade (G2-3), no spread to lymph nodes or distant sites
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border border-amber-100 font-medium">Stage IIIB</td>
                  <td className="py-2 px-3 border border-amber-100">
                    Larger tumor ({'>'}5 cm), high grade (G2-3), no spread to lymph nodes or distant sites
                  </td>
                </tr>
                <tr className="bg-amber-50/30">
                  <td className="py-2 px-3 border border-amber-100 font-medium">Stage IV</td>
                  <td className="py-2 px-3 border border-amber-100">
                    Any size tumor, any grade, with spread to lymph nodes and/or distant sites
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
          <p className="text-gray-700 italic">
            "The staging system divides sarcomas into 3 grades (1 to 3). The grade of a sarcoma helps predict how rapidly it will grow and spread. It's useful in predicting a patient's outlook and helps determine treatment options."
            <span className="block text-right text-sm mt-2">— American Cancer Society</span>
          </p>
          <div className="mt-3 text-sm">
            <Link 
              href="https://www.cancer.org/cancer/types/soft-tissue-sarcoma/detection-diagnosis-staging/staging.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-amber-700 hover:text-amber-800 font-medium"
            >
              Learn more 
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      <div id="sarcoma-grading" className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 shadow-md border border-orange-200">
        <div className="flex items-center mb-4">
          <div className="bg-orange-500 p-2 rounded-full mr-4">
            <Scale className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-800">Sarcoma Grading</h3>
            <p className="text-orange-600">How soft tissue sarcomas are graded</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          For soft tissue sarcomas, including Leiomyosarcoma (LMS), the most commonly used grading system is the French Federation of Cancer Centers Sarcoma Group (FNCLCC) system, which evaluates three factors:
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white/70 rounded-lg p-4 border border-orange-200 hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-orange-800 mb-2">1. Differentiation Score</h4>
            <p className="text-sm text-gray-700 mb-2">
              How closely the cancer cells resemble normal cells:
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="bg-orange-200 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-orange-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <span><span className="font-medium">Score 1:</span> Cells look similar to normal cells</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-200 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-orange-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <span><span className="font-medium">Score 2:</span> Cells are somewhat abnormal</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-200 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-orange-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <span><span className="font-medium">Score 3:</span> Cells are very abnormal and hard to identify</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/70 rounded-lg p-4 border border-orange-200 hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-orange-800 mb-2">2. Mitotic Count Score</h4>
            <p className="text-sm text-gray-700 mb-2">
              How many cancer cells are dividing (in mitosis):
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="bg-orange-200 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-orange-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <span><span className="font-medium">Score 1:</span> 0-9 mitoses per 10 high-power fields</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-200 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-orange-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <span><span className="font-medium">Score 2:</span> 10-19 mitoses per 10 high-power fields</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-200 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-orange-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <span><span className="font-medium">Score 3:</span> 20 or more mitoses per 10 high-power fields</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/70 rounded-lg p-4 border border-orange-200 hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-orange-800 mb-2">3. Tumor Necrosis Score</h4>
            <p className="text-sm text-gray-700 mb-2">
              How much of the tumor tissue is dead (necrotic):
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="bg-orange-200 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-orange-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <span><span className="font-medium">Score 0:</span> No necrosis</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-200 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-orange-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <span><span className="font-medium">Score 1:</span> Less than 50% necrosis</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-200 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-orange-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <span><span className="font-medium">Score 2:</span> 50% or more necrosis</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white/70 rounded-lg p-5 border border-orange-100 mb-6">
          <h4 className="font-semibold text-orange-800 mb-3">FNCLCC Grade Determination</h4>
          <p className="text-sm text-gray-700 mb-3">
            The scores from the three categories are added together to determine the grade:
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
              <div className="text-center font-bold text-orange-700 mb-2">Grade 1</div>
              <p className="text-xs text-gray-700 text-center">
                Total score: 2-3<br />
                Low-grade, less aggressive
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
              <div className="text-center font-bold text-orange-700 mb-2">Grade 2</div>
              <p className="text-xs text-gray-700 text-center">
                Total score: 4-5<br />
                Intermediate-grade
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
              <div className="text-center font-bold text-orange-700 mb-2">Grade 3</div>
              <p className="text-xs text-gray-700 text-center">
                Total score: 6-8<br />
                High-grade, more aggressive
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/70 rounded-lg p-5 border border-orange-200">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <Microscope className="h-5 w-5 text-orange-600" />
            </div>
            <h4 className="font-semibold text-orange-800">Leiomyosarcoma-Specific Considerations</h4>
          </div>
          
          <p className="text-sm text-gray-700 mb-3">
            For Leiomyosarcoma (LMS) specifically:
          </p>
          
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <div className="bg-orange-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
              </div>
              <span>LMS is often characterized by a high mitotic rate, which can influence its grade</span>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
              </div>
              <span>The location of the LMS (e.g., uterine, retroperitoneal, extremity) can affect how the grading is interpreted</span>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
              </div>
              <span>Some LMS tumors may have areas of different grades within the same tumor (heterogeneity)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
              </div>
              <span>The grade of LMS is particularly important in determining treatment approach and predicting behavior</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
