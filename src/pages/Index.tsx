import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              грач - писюн
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                грач - писюн
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                грач - писюн
              </a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                грач - писюн
              </a>
              <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                грач - писюн
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              Начать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              грач - писюн<br />
              <span className="text-blue-600">грач - писюн</span><br />
              грач - писюн
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg hover-scale">
                <Icon name="Smartphone" size={20} className="mr-2" />
                грач - писюн
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg hover-scale">
                <Icon name="Play" size={20} className="mr-2" />
                грач - писюн
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              грач - писюн
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                грач - писюн
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-blue-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">грач - писюн</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl animate-scale-in">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  грач - писюн
                </h4>
                <p className="text-gray-600">
                  грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              грач - писюн
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Smartphone" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  грач - писюн
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  грач - писюн
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sparkles" size={32} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  грач - писюн
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  грач - писюн грач - писюн грач - писюн грач - писюн.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              грач - писюн
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              грач - писюн грач - писюн грач - писюн грач - писюн
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-50 border-0 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    А
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">грач - писюн</h4>
                    <p className="text-gray-600 text-sm">грач - писюн</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-0 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    М
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">грач - писюн</h4>
                    <p className="text-gray-600 text-sm">грач - писюн</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-0 hover:shadow-lg transition-all duration-300 hover-scale md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    Д
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">грач - писюн</h4>
                    <p className="text-gray-600 text-sm">грач - писюн</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "грач - писюн грач - писюн грач - писюн грач - писюн грач - писюн"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              грач - писюн грач - писюн грач - писюн?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              грач - писюн грач - писюн грач - писюн грач - писюн
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-scale">
              <Icon name="Rocket" size={20} className="mr-2" />
              грач - писюн
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">грач - писюн</div>
            <p className="text-gray-400 mb-6">
              грач - писюн грач - писюн грач - писюн грач - писюн
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}