# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'simple_client_validation/version'

Gem::Specification.new do |spec|
  spec.name          = "simple_client_validation"
  spec.version       = SimpleClientValidation::VERSION
  spec.authors       = ["Petar Risteski"]
  spec.email         = ["risteskipetar3@gmail.com"]

  spec.summary       = %q{Simple client validation messages}
  spec.description   = %q{}
  spec.homepage      = "https://github.com/bobpetar/simple_client_validation"
  spec.license       = "MIT"



  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.14"
  spec.add_development_dependency "rake", "~> 10.0"
end
